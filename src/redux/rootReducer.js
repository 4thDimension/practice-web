import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import homeReducer from '../modules/Home/reducers/index';

export default combineReducers({
  router,
  homeReducer
});
