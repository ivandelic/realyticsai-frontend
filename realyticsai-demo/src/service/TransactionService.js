export class TransactionService {

    constructor() {
    }

    listProperties(oib) {
        return fetch('' + process.env.REACT_APP_OBP_RESTPROXY1_ADDRESS + '', { 
            method: 'post',
            headers: new Headers({
              'Authorization': 'Basic '+btoa('' + process.env.REACT_APP_OBP_RESTPROXY1_USERNAME + ':' + process.env.REACT_APP_OBP_RESTPROXY1_PASSWORD + ''), 
              'Content-Type': 'application/json'
            }), 
            body: JSON.stringify({
                channel: "test", 
                chaincode: "java-meetup-17", 
                method: "propertyQueryList",
                chaincodeVer: "v1",
                args: ['' + oib + '']
            })
          }).then(promise => promise.json());
    }

    moneyQuery(oib) {
      return fetch('' + process.env.REACT_APP_OBP_RESTPROXY1_ADDRESS + '', { 
          method: 'post',
          headers: new Headers({
            'Authorization': 'Basic '+btoa('' + process.env.REACT_APP_OBP_RESTPROXY1_USERNAME + ':' + process.env.REACT_APP_OBP_RESTPROXY1_PASSWORD + ''), 
            'Content-Type': 'application/json'
          }), 
          body: JSON.stringify({
              channel: "test", 
              chaincode: "java-meetup-17", 
              method: "moneyQuery",
              chaincodeVer: "v1",
              args: ['' + oib + '']
          })
        }).then(promise => promise.json());
  }
}