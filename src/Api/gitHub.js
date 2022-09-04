/* eslint-disable */
class GitHub {
    constructor() {
        this.getBranches = this.getBranches.bind(this);
        this.getExtensions = this.getExtensions.bind(this);
    }

    getBranches(owner, repo) {
        return fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, {
            method: 'GET',
            headers: {Accept: 'application/vnd.github.v3+json'}
        });
    }

    getExtensions(owner, repo, treeSha) {
        return fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${treeSha}`, {
            method: 'GET',
            headers: {Accept: 'application/vnd.github.v3+json'}
        });
    }
}

export default new GitHub();
