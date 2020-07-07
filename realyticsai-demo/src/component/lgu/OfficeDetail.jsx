import React, { Component } from 'react'
import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { Binding } from '../../utils/Util'

class OfficeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lgu: this.props.lgu,
            lguStatus: [
                { label: 'Municipality', value: 'Municipality'},
                { label: 'City', value: 'City'}
            ],
            lguCounties: this.props.lguCounties
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.lgu !== state.lgu) {
            return {
                lgu: props.lgu,
                lguCounties: props.lguCounties
            };
        }
        return {};
    }

    binding(object, node, e) {
        this.setState({
            lgu: Binding.updateByString.bind(null, object, node, e.target.value).call()
        });
    }

    render() {
        return (
            <Card title="Identification" className="wc">
                <div className="p-grid">
                    <div className="p-col-12 p-md-6">
                        <h2>Office Name</h2>
                        <InputText
                            id="officeName"
                            type="text"
                            value={this.state.lgu.name || ''}
                            onChange={this.binding.bind(this, this.state.lgu, 'name')}
                        />
                    </div>
                    <div className="p-col-12 p-md-6"></div>
                    <div className="p-col-12">
                        <hr></hr>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <h2>Status</h2>
                        <Dropdown 
                            value={this.state.lgu.status}
                            options={this.state.lguStatus}
                            onChange={this.binding.bind(this, this.state.lgu, 'status')}
                            placeholder="Status" 
                            autoWidth={false}
                        />
                    </div>
                    <div className="p-col-12 p-md-6">
                    <h2>County</h2>
                        <Dropdown 
                            value={this.state.lgu.lguCounty}
                            options={this.state.lguCounties}
                            optionLabel="name"
                            onChange={this.binding.bind(this, this.state.lgu, 'lguCounty')}
                            placeholder="County" 
                            autoWidth={false}
                        />
                    </div>
                    <div className="wc-button-container p-col-12">
                        {!!this.state.lgu.id && 
                            <Button label="Delete" className="p-button-raised" icon="pi pi-minus" onClick={this.props.onDataItemRemove.bind(null, this.state.lgu)} />
                        }
                        <Button label="Save" className="p-button-raised" icon="pi pi-check" onClick={this.props.onDataItemSave.bind(null, this.state.lgu)} />
                    </div>
                </div>
            </Card>
        );
    }
}

OfficeDetail.propTypes = {
    lgu: PropTypes.object,
    lguStatus: PropTypes.array,
    lguCounties: PropTypes.array,
    onDataItemSave: PropTypes.func,
    onDataItemRemove: PropTypes.func
}

OfficeDetail.defaultProps = {
    lgu: {},
    lguCounties: ['No data']
}

export default OfficeDetail;