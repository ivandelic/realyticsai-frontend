import React, { Component } from 'react'
import {Card} from 'primereact/card';
import PropTypes from 'prop-types';
import { Binding } from '../../utils/Util'

class LguStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lgu: this.props.lgu
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.lgu !== state.lgu) {
            return {
                lgu: props.lgu
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
            <Card title="LGU Trends" className="wc">
                <div className="p-grid">
                    <div className="p-col-12 p-md-6">
                        <img src={"http://127.0.0.1:5000/?lgu=" + this.state.lgu.name} />
                    </div>
                    <div className="p-col-12 p-md-6"></div>
                </div>
            </Card>
        );
    }
}

LguStats.propTypes = {
    lgu: PropTypes.object
}

LguStats.defaultProps = {
    lgu: {}
}

export default LguStats;