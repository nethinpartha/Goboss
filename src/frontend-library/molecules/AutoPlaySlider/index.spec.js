import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../../testing-utils/utils';
import AutoPlay from './index'


const setUp = (props = {}) => {
    const component = shallow(<AutoPlay {...props} />);
    return component;
}

describe('Auto play slider component', () => {

    describe('Checking proptypes', () => {
        it('it should not through warnings', () => {
            const expectedProps = {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 10000,
                autoplaySpeed: 2000,
                cssEase: "linear"
            }
            const propsErr = checkProps(AutoPlay, expectedProps)

            expect(propsErr).toBeUndefined()
        })
    })
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                dots: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 10000,
                autoplaySpeed: 2000,
                cssEase: "linear",
                display: true
            }
            wrapper = setUp(props)
        })

        it('it should render without errors', () => {
            const component = findByTestAttr(wrapper, 'sliderComponent');
            expect(component.length).toBe(1);
        })
    })

    describe('have NO props', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setUp();
        })
        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'sliderComponent  ');
            expect(component.length).toBe(0);
        })
    })


})
