import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './src/store/reducers/products';
import FoodNavigator from './src/navigation/FoodNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);


export default function App() {
  return (
    <Provider store={store}>
      <FoodNavigator />
    </Provider>
  );
}
