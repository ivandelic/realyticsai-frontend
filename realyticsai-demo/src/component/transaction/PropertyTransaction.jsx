import React, { Component } from 'react'
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { Binding } from '../../utils/Util'

class PropertyTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: this.props.pin,
            propertyList: this.props.propertyList
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.propertyList !== state.propertyList) {
            return {
                propertyList: props.propertyList
            };
        }
        return {};
    }

    binding(object, node, e) {
        this.setState({
            pin: Binding.updateByString.bind(null, object, node, e.target.value).call()
        });
    }

    render() {
        return (
            <Card title="Identification" className="wc">
                <div className="p-grid">
                    <div className="p-col-12">
                        <h2>OIB</h2>
                        <InputText
                            id="name"
                            type="text"
                            value={this.state.pin}
                            onChange={this.binding.bind(this, this.state, 'pin')}
                        />
                    </div>
                    <div className="p-col-12">
                        <hr></hr>
                    </div>
                    <div className="p-col-12">
                        <h2>Properties</h2>
                        <div>{'' + (!!this.props.propertyList ?  this.props.propertyList : 'none')}</div>
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