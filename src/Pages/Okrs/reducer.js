import globalState from 'Store/globalState';
import utils from 'Utilities/Utils';
import { 
  OKR_REQUEST, 
  OKR_SUCCESS, 
  OKR_FAILURE} from './actionCreators';

let updateResults = (state, action) => {
  let {response} = action.value;
  let newState = {...state}
  newState.renderData = utils.createDisplayDataTree(response.data);
  newState.filters = utils.getFilters(newState.renderData, 'category');
  newState.loading = false;
  newState.apiError = false;
  console.log(newState);
  return newState;
}


export default function OkrReducer(state = globalState.okrPageState, action) {
  switch (action.type) {
    case OKR_REQUEST:
      return {...state, loading: true, apiError: false};
    case OKR_SUCCESS:
      return updateResults(state, action);
    case OKR_FAILURE:
      return {...state, loading: false, apiError: true};
    default:
      return state;
  }
}
