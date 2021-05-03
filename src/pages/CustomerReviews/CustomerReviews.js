import React from 'react'
import './CustomerReviews.css'
import {customerReviews} from './CustomerReviewList'
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import {customerMetricList} from './CustomerMetricsList'
import MetricItem from '../../components/MetricItem/MetricItem';

export default function CustomerReviews() {

    const getCustomerReviews = customerReviews.map(({ customerName, customerRating,customerReviewContent }, index) => {
        return (
            <ReviewCard customerName={customerName} customerRating={customerRating} customerReviewContent={customerReviewContent}/>
        );
    });    

    const getCustomerMetrics = customerMetricList.map(({ itemCount, itemTitle }, index) => {
        return (
            <MetricItem itemCount={itemCount} itemTitle={itemTitle}/>
        );
    });    


    return (
        <div className="customer-reviews-container">
            <div className="customer-review-title-container">
                <h1 className="customer-review-title">What our Customers Say ?</h1>
                <h1 className="customer-review-sub-title">They truely love what we serve !</h1>
            </div>
            <div className="customer-reviews">
                {getCustomerReviews}
            </div>
            <div className="customer-metrics-container">
                <div className="customer-metric-item">
                    {getCustomerMetrics}
                </div>
            </div>
        </div>
    )
}
