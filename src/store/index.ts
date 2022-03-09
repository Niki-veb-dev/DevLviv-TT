import { createStore, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { LOAD_CODE, LOAD_RATES } from './actions';

const initialState: State = {
  rates: {},
  code: '',
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_RATES:
      return { ...state, rates: action.payload };

    case LOAD_CODE:
      return { ...state, code: action.payload };

    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
