export class OfficeService {

    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL;
        this.veryWrongOfStoringAccessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkY0MF8yMk9jeE53UkdOSmVOdmp6ZyJ9.eyJpc3MiOiJodHRwczovL2l2YW5kZWxpYy5ldS5hdXRoMC5jb20vIiwic3ViIjoiTEE3T3Zjemtlck9jUE9VaXZxVWxORFJPaWpXanR2SEtAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vaXZhbmRlbGljLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNTkxMzQ4MTMxLCJleHAiOjE1OTE0MzQ1MzEsImF6cCI6IkxBN092Y3prZXJPY1BPVWl2cVVsTkRST2lqV2p0dkhLIiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.pbAQLBcjmMJipulCUJq2HyD3nPe2sdt8IyL4_nyCll80bHz9kh1ui_BOlZXurDV723Wazgj4GrDL4BK6E4LCyO4UjL20yiHKKe4tKsVazBXtTDr4LBY4G2nop_0DCLf-mmGX70QVA4J6v-0nZlayFfreOeMO3DRndnaJ9ivI5YEBb9heMb_1YUuGubMSzRbQ5akLGyutbcKGYkWk1TjgvUYY0RabyZUSlCM57LmmtSkVON0odbFFdSLRuenquGla7u_gO5IBvhQz3BbVEpk_ZVXEty8-K0xOd2KEHbAnE3AAW5cKqpz-_yGzeilShsfpJpSWoXIgLPJ3ObZocDaDEg";
    }

    listLgu() {
        return fetch(this.baseUrl + "/lgu-manager/lgus", {
            headers: {
                'Authorization': this.veryWrongOfStoringAccessToken
            }
        }).then(promise => promise.json());
    }

    listLguCounties() {
        return fetch(this.baseUrl + "/lgu-manager/lgu-counties", {
            headers: {
                'Authorization': this.veryWrongOfStoringAccessToken
            }
        }).then(promise => promise.json())
    }

    getLgu(id) {
        return fetch(this.baseUrl + "/lgu-manager/lgu/" + id, {
            headers: {
                'Authorization': this.veryWrongOfStoringAccessToken
            }
        }).then(promise => promise.json());
    }

    saveItem(item) {
        if (!item.id) {
            console.log('Creating item!');
            return this.createItem(item);
        }
        else {
            console.log('Updating item!');
            return this.updateItem(item);
        }
    }

    updateItem(item) {
        return fetch(this.baseUrl + "/lgu-manager/lgu", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.veryWrongOfStoringAccessToken
            }
        }).then(promise => promise.json());
    }

    createItem(item) {
        return fetch(this.baseUrl + "/lgu-manager/lgu", {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.veryWrongOfStoringAccessToken
            }
        }).then(promise => promise.json());
    }

    deleteItem(id) {
        return fetch(this.baseUrl + "/lgu-manager/lgu/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.veryWrongOfStoringAccessToken
            }
        }).then(promise => promise.json());
    }
}