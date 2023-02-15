import { type } from '../constants/changephonenoconstants';

const initialState = {

}

function ChangePhoneNumber(state = initialState, action) {
    switch (action.type) {
        case type.UPDATE_PHONE_NUMBER_REQUEST:
            return { ...state, loading: true, response: action.newemail }
        case type.UPDATE_PHONE_NUMBER_SUCCESS:
            return { ...state, loading: false, response: action.response }
        case type.UPDATE_PHONE_NUMBER_FAILURE:
            return { ...state, loading: false, response: action.error }
        default:
            return state
    }
}

export default ChangePhoneNumber;