import React from 'react'
import './ReviewCard.css'

export default function ReviewCard(props) {
    return (
        <div className="review-card-container">
            <img src="" alt=""/>
            <div className="customer-info-row">
                <h1 className="customer-name">{props.customerName}</h1>
                <h1 className="rating-bar"></h1>
            </div>
            <h1 className="customer-actual-review">{props.customerReviewContent}</h1>
        </div>
    )
}
