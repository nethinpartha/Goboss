import React, { Component } from 'react'
import PropTypes from 'prop-types'
require('./style.scss')


//** Elastic search component */ 

// TODO - Filter the results on page based on search criteria

class ElasticSearch extends Component {

    render() {
        const { placeholder, display } = this.props;
        if (!display) {
            return null
        }
        return (
            <form id="demo-2" data-test="elasticSearchComponent">
                <input type="search" placeholder={placeholder} />
            </form>
        )
    }
}

ElasticSearch.propTypes = {
    placeholder: PropTypes.string,
    display: PropTypes.bool
}

export default ElasticSearch
