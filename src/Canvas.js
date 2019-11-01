import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            children: [],
            ctx: null
         }
    }

    static childContextTypes = {
        ctx: PropTypes.object
    }

    getChildContext() {
        return {
            ctx: this.state.ctx
        }
    }

    render() { 
        return ( 
            <canvas width={this.props.width} height={this.props.height}>
                { this.props.children }
            </canvas>
         );
    }

    componentDidMount() {
        this.setState({
            children: this.props.children,
            ctx: ReactDOM.findDOMNode(this).getContext('2d')
        })
    }
}
 
export default Canvas;