import React, { Component } from 'react'
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { Binding } from '../../utils/Util'
import {TransactionService} from '../../service/TransactionService'

class PropertyTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: this.props.pin,
            propertyList: this.props.propertyList,
            money: 0
        }
        this.service = new TransactionService();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.propertyList !== state.propertyList) {
            return {
                propertyList: props.propertyList
            };
        }
        return {};
    }

    loadData() {
        this.service.listProperties(this.state.pin).then(p => {
            if (!!p.result) {
                this.setState({ 
                    propertyList: p.result.payload
                });
            }
        });
        this.service.moneyQuery(this.state.pin).then(p => {
            if (!!p.result) {
                this.setState({ 
                    money: p.result.payload
                });
            }
        });
    }

    binding(event) {
        this.setState({
            pin: event.target.value
        });
    }

    render() {
        return (
            <Card title="Identification" className="wc">
                <div className="p-grid">
                    <div className="p-col-10">
                        <h2>OIB</h2>
                        <InputText
                            id="name"
                            type="text"
                            value={this.state.pin}
                            onChange={this.binding.bind(this)}
                        />
                    </div>
                    <div className="p-col-2">
                        <Button 
                            className="p-button-raised"
                            style={{marginTop: 1.5 + 'em'}}
                            icon="pi pi-refresh"
                            onClick={this.loadData.bind(this)}
                        />
                    </div>
                    <div className="p-col-12">
                        <hr></hr>
                    </div>
                    <div className="p-col-12">
                        <h2>Properties</h2>
                        <div>{'' + (!!this.state.propertyList ?  this.state.propertyList : 'none')}</div>
                    </div>
                    <div className="p-col-12">
                        <h2>Money Balance</h2>
                        <div>{'' + (!!this.state.money ?  this.state.money : 'none')}</div>
                    </div>
                    <div className="wc-button-container p-col-12">
                    </div>
                </div>
            </Card>
        );
    }
}

PropertyTransaction.propTypes = {
    pin: PropTypes.string
}

PropertyTransaction.defaultProps = {
    pin: {}
}

export default PropertyTransaction;