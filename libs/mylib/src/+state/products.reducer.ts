import { Products } from './products.interfaces';
import { ProductsAction } from './products.actions';

export function productsReducer(state: Products, action: ProductsAction): Products {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
