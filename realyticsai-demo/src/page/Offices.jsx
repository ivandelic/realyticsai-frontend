import React, { Component } from 'react';
import OfficeDetail from '../component/lgu/OfficeDetail'
import LguStats from '../component/lgu/LguStats'
import SimpleDataView from '../component/table/SimpleDataView'
import {OfficeService} from '../service/OfficeService'

class Offices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lgus: [],
            lgu: {},
            lguCounties: []
        }
        this.service = new OfficeService();
    }

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        this.service.listLgu().then(l => {
            this.service.listLguCounties().then(lc => {
                console.log(lc);
                this.setState({ 
                    lgus: l,
                    lgu: l[0],
                    lguCounties: lc 
                });
            });
        });
    }

    refreshData() {
        this.service.listLgu().then(t => {
            this.setState({ 
                lgus: t,
            });
        });
    }

    onDataItemNewEvent() {
        this.setState({ 
            lgu: {
                name: '',
                lguCounty: {},
                status: 'City',
            }
        });
    }

    onDataItemSaveEvent(item) {
        this.service.saveItem(item).then(p => {
            this.setState({ 
                lgu: p
            });
            this.refreshData();
        });
    }

    onDataItemSelectEvent(item) {
        this.setState({ lgu: item });
    }

    onDataItemRemoveEvent(item) {
        this.service.deleteItem(item.id).then(p => {
            this.setState({ 
                lgu: {}
            });
            this.refreshData();
        });
    }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12 p-md-6 p-lg-3">
                    <SimpleDataView 
                        dataItems={this.state.lgus}
                        selectedItem={this.state.lgu}
                        onDataItemSelect={this.onDataItemSelectEvent.bind(this)}
                        onDataItemNew={this.onDataItemNewEvent.bind(this)}
                    />
                </div>
                {!(Object.keys(this.state.lgus).length === 0 && this.state.lgus.constructor === Object) && 
                    <div className="p-col-12 p-md-6 p-lg-9">
                        <OfficeDetail 
                            lgu={this.state.lgu}
                            lguCounties={this.state.lguCounties}
                            onDataItemSave={this.onDataItemSaveEvent.bind(this)}
                            onDataItemRemove={this.onDataItemRemoveEvent.bind(this)}
                        />
                        <div className="p-col-12">
                        </div>
                        <LguStats
                            lgu={this.state.lgu}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default Offices;