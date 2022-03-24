import { StatusBar } from 'expo-status-bar';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './src/store/reducers/products';
import ShopNavigator from './src/navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);


export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
