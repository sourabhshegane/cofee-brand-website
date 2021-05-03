import React from 'react'
import './MetricItem.css'

export default function MetricItem(props) {
    return (
        <div className="metric-item-container">
            <h1 className="metric-item-count">
                {props.itemCount}
            </h1>
            <h1 className="metric-item-title">
                {props.itemTitle}
            </h1>
        </div>
    )
}
