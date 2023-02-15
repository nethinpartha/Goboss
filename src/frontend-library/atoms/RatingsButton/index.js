import React, { Component } from 'react'
import PropTypes from 'prop-types'
import imdb from './../../icons/imbd.png'
require('./style.scss')

class RatingsButton extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    // Error boundary added
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // logErrorToMyService(error, errorInfo);
    }

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent()
        }

    }

    render() {
        const { value = 7.5 } = this.props;

        if (!value) {
            return null;
        }

        if (this.state.hasError) return <div>Something went wrong.</div>;

        return (
            <button type="submit" id="image-button" className={"button-container"} onClick={this.submitEvent()} data-test='buttonComponent'>
                <span>{value}/10</span>
                <img src={imdb} alt="Save icon" />
            </button>
        )
    }
}

RatingsButton.propTypes = {
    value: PropTypes.number,
    emitEvent: PropTypes.func
}

export default RatingsButton
