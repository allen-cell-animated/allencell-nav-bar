import ReactDOM from "react-dom";
import React from "react";

import AllenCellHeader from '../dist';
import './style.css';
ReactDOM.render(
    <AllenCellHeader 
        show={true}
    />,
    document.getElementById("root")
);