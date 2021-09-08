import React, { Component } from 'react'
import load from './load.gif'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class spinner extends Component {
    render() {
        return (
        <img src={load} alt="load" />
        )
    }
}
