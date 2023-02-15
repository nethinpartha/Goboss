import React from 'react';
import { LoadingSpinner } from '../../frontend-library/atoms/loadingSpinner';

export const Cards = ({ handleSubscriptionPlanClick, membershipdetails, loading }) => {
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div className="card-container">
            {membershipdetails.map((membership, index) => (
                < div
                    className="cards"
                    key={index}
                    onClick={() => handleSubscriptionPlanClick(membership)}>
                    <div className="rightsection">
                        <p className="card-title">
                            <span
                                style={{ textTransform: 'uppercase', fontWeight: '800' }}
                                className="gradient-text"
                            >
                                {membership.title}
                            </span>
                        </p>
                        <div style={{ minHeight: '4.5rem' }}>
                            <p className="card-text">{membership.metadata.title}</p>
                            <p className="card-text">{membership.metadata.subtitle}</p>
                        </div>
                    </div>
                    <div className="leftsection">
                        <p className="card-price">
                            <sup className="currency">{membership.currency}
                            </sup><span className="main">{membership.main}</span>
                        </p>
                        <p className="card-text">{membership.price}</p>
                    </div>
                    {!membership.selected && <button className="card-button"
                        onClick={() => handleSubscriptionPlanClick(membership)}>
                        {membership.btnTxt}
                    </button>}
                    {membership.selected &&
                        <button
                            style={{
                                background: `#E2E2E2 0% 0% no-repeat padding-box`,
                                color: '#585858',
                                border: 'none',
                                fontS: '13px',
                                padding: '0.5rem 3.5rem'
                            }}
                            className="selected"
                            disabled
                        >
                            {`SELECTED`}
                        </button>
                    }
                </div>
            ))
            }

        </div >
    )
}


export const ChoosePlanDetails = ({ plansDetails }) => {
    const { planHeader, step, benefits } = plansDetails;
    const checkSvg = () => {
        return (
            <svg
                viewBox="0 0 24 24"
                className="checkmark-group--icon"
                aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path>
            </svg>
        )
    }
    return (
        <>
            <div className="benefits-wrapper">
                {step && <p>{step}</p>}
                {planHeader && <h2 className="chooseplan-header">{planHeader}</h2>}
                {
                    benefits.map((benefit, key) => (
                        <p key={key} className="benifits">
                            {checkSvg()}
                            <span className="checkmark-group--text">{benefit}</span>
                        </p>
                    ))
                }
            </div>
        </>
    )
}