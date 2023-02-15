
import { types } from '../constants/getcancellationreason.contants';
import { getCancellationReasonService } from '../services/getcancellationreason.service';

const getCancellationReason = () => {
    return (dispatch) => {

        dispatch(request({ type: types.GET_CANCELLATION_REASONS_REQUESTED }));
        getCancellationReasonService.getCancellationReason().then((response) => {
            dispatch(success({ type: types.GET_CANCELLATION_REASONS_SUCCESS, response }));
        },
            (error) => {
                dispatch(failure({ type: types.GET_CANCELLATION_REASONS_FAILURE, error }))
            }
        );
    };
};



function request({ type }) {
    return { type };
}

function success({ type, response }) {
    return { type, response };
}

function failure({ type, error }) {
    return { type, error };
}

export const getCancellationReasonAction = {
    getCancellationReason
};
