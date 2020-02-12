export class LguService {

    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;
    }

    listLgu() {
        return fetch(process.env.REACT_APP_API_URL + "/lgu-manager/lgus").then(promise => promise.json());
    }

    listLguCounties() {
        return fetch(process.env.REACT_APP_API_URL + "/lgu-manager/lgu-counties").then(promise => promise.json())
    }

    getLgu(id) {
        //return fetch(this.baseUrl + "/lgu-360/lgu/" + id).then(promise => promise.json());
        return fetch(process.env.REACT_APP_API_URL + "/lgu-manager/lgu/" + id).then(promise => promise.json());
    }
}