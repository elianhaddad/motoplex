/* eslint-disable */
class Motoplex {
    constructor() {
        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(owner, repo) {
        return fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, {
            method: 'GET',
            headers: {Accept: 'application/vnd.github.v3+json'}
        });
    }

}

export default new Motoplex();
