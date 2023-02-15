import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'
import RootReducer from './../../reducers/index'
import { middleWares } from './../../helpers/store'


export const checkProps = (component, expectedProps) => {
    const propErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propErr
}

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const testStore = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
    return createStoreWithMiddleWare(RootReducer, initialState)

}