export const OKR_REQUEST = 'OKR_REQUEST';
export const OKR_SUCCESS = 'OKR_SUCCESS';
export const OKR_FAILURE = 'OKR_FAILURE';

const actions = {
    
    okrRequest: () => {
        return {
            type: OKR_REQUEST
        }
    },
  
    okrResolved: (params, status) => {
        return {
            type: status === 'success' ? OKR_SUCCESS : OKR_FAILURE,
            value: {
                response: params.data,
                status
            }
        }
    }
};

export default actions;