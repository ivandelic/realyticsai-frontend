import React, { Component } from 'react';
import PropertyTransaction from "../component/transaction/PropertyTransaction";

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: "987654321",
            pin2: "123456789"
        }
    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12 p-md-6 p-lg-6">
                    <PropertyTransaction 
                        pin={this.state.pin1}
                    />
                </div>
                <div className="p-col-12 p-md-6 p-lg-6">
                    <PropertyTransaction 
                        pin={this.state.pin2}
                    />
                </div>
            </div>
        );
    }
}

export default Transaction;