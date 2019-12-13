import React, { Component } from 'react';
import axios from 'axios';

export default class AlertList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    fetchData = async () => {
        try {
            const res = await axios.get('http://webhook.site/7d5eaf2b-6eb2-4d73-9040-fac1f517e687')
            this.setState({ data: res.data})
        }
        catch(err) {
            console.log(err)
        }
    }

    componentDidMount = async () => {
        await this.fetchData()
    }

    alertById = () => {
        
        const filtered = this.state.data.data.filter(value => value.alertId === this.props.alertsState)
        return filtered  
    }

    render() {
        return(
            <div>
            {this.state.data.length === 0 ? null :
                this.alertById().map(item =>
                <div>
                    <p>{this.props.alertsState}</p>
                    <p>{item.alertName}</p>
                    <p>{item.title}</p>
                    <p>{item.sourceApplication}</p>
                </div>
                )}
            </div>
        )
    }
}