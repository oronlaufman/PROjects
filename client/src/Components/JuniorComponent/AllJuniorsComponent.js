import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import JuniorComponent from './JuniorComponent';
import './JuniorComponent.css';
import './AllJuniorsComponent.css';

class AllJuniorsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: "lightskyblue",
            animation: "null",
            error: null,
            isLoaded: false,
            items: []
        }
    }

    scrollEventHandler = (event) => {
        if (window.scrollY > 300) {
            this.setState({
                background: "linear-gradient(to bottom, #87cefa 10%, #a6c5d9 100%, #000000 100%)",
                animation: "grow 360s  linear 10ms" 
            });
        }
        else {
            this.setState({
                background: "lightskyblue",
                animation: "null"
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventHandler);
        fetch("/home/juniors")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render () {
        const RowStyle = {
            marginLeft: "5%",
            marginRight: "5%",
        }
        const { error, isLoaded, items} = this.state
        if (error) {
            return <div>Error: { error.message }</div>}
        else if (!isLoaded) {
            return <div>Loading...</div>}
        else { 
            const juniors_array = (<Row style={RowStyle}>
                            {items.map((Junior) => (
                                <JuniorComponent className="col-sm-4"
                                    cardTitle={Junior.full_name} 
                                    cardText={Junior.about_me} 
                                    cardLink="#"/>))}
                            </Row>)
            return <div className="JuniorsList" style={this.state}>
                        <h1 class="JuniorListHeader">All of Our Juniors</h1>
                        {juniors_array}
                    </div>
        }            
    }
}

export default AllJuniorsComponent;