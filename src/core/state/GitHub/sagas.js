import {
    call,
    put,
    all,
    takeLatest
} from 'redux-saga/effects';

import find from 'lodash/find';
import findIndex from 'lodash/findIndex';
import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import split from 'lodash/split';

import Actions from './actions';
import Types from './types';

import Api from '../../../Api/gitHub';

const {
    fetchExtensionsSucceeded,
    setIsLoading
} = Actions;

const {FETCH_EXTENSIONS_REQUESTED} = Types;

function* fetch({push, owner, repo, setMessage, alert}) {
    try {
        setIsLoading(true);
        const branchesResponse = yield call(Api.getBranches, owner, repo);

        if (get(branchesResponse, 'status') !== 200) {
            setIsLoading(false);
            setMessage('Repository not found');
            alert();
            return;
        }

        const branches = yield branchesResponse.json();

        if (!isArray(branches) || isEmpty(branches)) {
            setIsLoading(false);
            setMessage('Branches not found');
            alert();
            return;
        }

        const branchToAnalyze = find(branches, el => el.name === 'master') || branches[0];
        const treeSha = get(branchToAnalyze, 'commit.sha');

        const treeResponse = yield call(Api.getExtensions, owner, repo, treeSha);
        const treeObj = yield treeResponse.json();

        const extensions = [];

        const getFilesRecursively = async tree => {
            await Promise.all(map(tree, async file => {
                if (get(file, 'type') === 'tree') {
                    const response = await Api.getExtensions(owner, repo, get(file, 'sha'));
                    const object = await response.json();
                    if (get(object, 'tree')) { await getFilesRecursively(get(object, 'tree')); }
                } else if (get(file, 'path')) {
                    const fileName = get(file, 'path');
                    const extension = split(fileName, '.').pop();
                    const index = findIndex(extensions, el => el.name === extension);

                    if (index === -1) {
                        extensions.push({
                            name: extension, count: 1
                        });
                    } else {
                        extensions[index].count += 1;
                    }
                }
            }));
        };

        yield getFilesRecursively(get(treeObj, 'tree'));
        yield put(fetchExtensionsSucceeded({extensions}));

        push('/details');
    } catch (error) {
        setMessage(get(error, 'message', 'Unknown Error'));
        alert();
    } finally {
        setIsLoading(false);
    }
}

export default function* GitHubSagas() {
    yield all([
        takeLatest(FETCH_EXTENSIONS_REQUESTED, fetch)
    ]);
}
