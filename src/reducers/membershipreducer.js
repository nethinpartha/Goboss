import { types } from '../actions/membershipactions'

const initialState = {


}

export default function membership(state = initialState, action) {
    switch (action.type) {
        case types.PLAN_SELECTED:
            return { ...state, data: action.data, loading: false, error: null }
        default:
            return state;
    }
}
