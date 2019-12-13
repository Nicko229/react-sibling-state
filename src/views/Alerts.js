import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Alerts extends Component {
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

    buttonClick = (item) => {
        this.props.alertsState(item.alertId)
        this.props.history.replace('/views/AlertsList')
    }

    render() {
        return(
            <div>
                {this.state.data.length === 0 ? null :
                this.state.data.data.map(item => 
                    <div>
                        <h3>Alert Name</h3>
                        <p>{item.alertName}</p>
                        <button onClick={() => this.buttonClick(item)} >state</button>         
                    </div> 
                 )} 
            </div>
        )
    }
}

export default withRouter(Alerts);