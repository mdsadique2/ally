import {ApiUrls} from 'Utilities/ApiUrls';
import actions from './actionCreators'
import axios from 'axios'

const actionDispatchers = (dispatch) => {

    let actionsObj = {
        // event dispatcher for fetching api data
        okrQuery: (query) => {
            dispatch(actions.okrRequest());
            let payload = {
                query
            }

            return axios.get(ApiUrls.sample, {
                params: payload
            }).then( (response) => {
                dispatch(actions.okrResolved(response, 'success'));
            }, (error) => {
                dispatch(actions.okrResolved(error, 'failure'));
                return Promise.reject(error);
            })
        },
    }
    return actionsObj;
}

export default actionDispatchers;