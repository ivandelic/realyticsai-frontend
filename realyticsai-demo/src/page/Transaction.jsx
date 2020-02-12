import React, { Component } from 'react';
import {TransactionService} from '../service/TransactionService'
import PropertyTransaction from "../component/transaction/PropertyTransaction";

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: "9876543210",
            pin2: "1234567890",
            propertyList1: "",
            propertyList2: ""
        }
        this.service = new TransactionService();
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        this.service.listProperties(this.state.pin1).then(p => {
            if (!!p.result) {
                this.setState({ 
                    propertyList1: p.result.payload
                });
            }
        });
        this.service.listProperties(this.state.pin2).then(p => {
            if (!!p.result) {
                this.setState({ 
                    propertyList2: p.result.payload
                });
            }
        });
    }

    onDataItemSelectEvent(item) {
    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12 p-md-6 p-lg-6">
                    <PropertyTransaction 
                        pin={this.state.pin1}
                        propertyList={this.state.propertyList1}
                    />
                </div>
                <div className="p-col-12 p-md-6 p-lg-6">
                    <PropertyTransaction 
                        pin={this.state.pin2}
                        propertyList={this.state.propertyList2}
                    />
                </div>
            </div>
        );
    }
}

export default Transaction;