import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../../testing-utils/utils'
import CustomizedProgressBars from './index'


const setUp = (value) => {
    const component = shallow(<CustomizedProgressBars value={value} />)
    return component;
}

describe('Progress bar component', () => {

    describe('Checking Proptypes', () => {

        it('It should render without any warnings', () => {
            const expectedProps = {
                value: 40
            }

            const propErr = checkProps(CustomizedProgressBars, expectedProps);

            expect(propErr).toBeUndefined()
        })
    })

    describe('have props', () => {
        let wrapper;
        beforeEach(() => {
            const value = 50
            wrapper = setUp(value);
        })

        it('it should render without errors', () => {
            const component = findByTestAttr(wrapper, 'linearProgressBarComponent');
            expect(component.length).toBe(1);
        })
    })

    describe('have NO Props', () => {
        let wrapper;
        beforeEach(() => {
            const value = undefined;
            wrapper = setUp(value);
        })
        it('it should not render', () => {
            const component = findByTestAttr(wrapper, 'linearProgressBarComponent');
            expect(component.length).toBe(0);
        })
    })
})
