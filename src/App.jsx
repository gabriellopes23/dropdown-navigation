import './App.css'
import React from "react";
import Header from "./components/Header";
import Content from './components/Content';

export default props => {
    return (
        <div>
            <Header />
            <Content />
        </div>
    )
}