import React from "react"
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

export default function Menu() {
    return (
        <ul>
            <li>
                <Link to="/generateData">Generate Data</Link>
            </li>
            <li>
                <Link to="/getAggregationTime">Get Aggregation Time</Link>
            </li>
        </ul>
    )
}