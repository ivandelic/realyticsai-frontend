export class LguService {

    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;
    }

    listLgu() {
        return fetch("http://localhost:8080/lgu-manager/lgus").then(promise => promise.json());
    }

    listLguCounties() {
        return fetch("http://localhost:8080/lgu-manager/lgu-counties").then(promise => promise.json())
    }

    getLgu(id) {
        //return fetch(this.baseUrl + "/lgu-360/lgu/" + id).then(promise => promise.json());
        return fetch("http://localhost:8080/lgu-manager/lgu/" + id).then(promise => promise.json());
    }
}