import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../../testing-utils/utils';
import Search from './index'


const setUp = (props = {}) => {
    const component = shallow(<Search {...props} />);
    return component;
}

describe('Search component', () => {

    describe('Checking proptypes', () => {
        it('it should not through warnings', () => {
            const expectedProps = {
                placeholder: '',
                display: true
            }
            const propsErr = checkProps(Search, expectedProps)

            expect(propsErr).toBeUndefined()
        })
    })
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                placeholder: 'Test 1',
                display: true
            }
            wrapper = setUp(props)
        })

        it('it should render without errors', () => {
            const component = findByTestAttr(wrapper, 'elasticSearchComponent');
            expect(component.length).toBe(1);
        })
    })

    describe('have NO props', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setUp()
        })
        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'elasticSearchComponent');
            expect(component.length).toBe(0);
        })
    })


})
