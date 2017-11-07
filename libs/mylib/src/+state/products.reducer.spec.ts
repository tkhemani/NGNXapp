import { productsReducer } from './products.reducer';
import { productsInitialState } from './products.init';
import { Products } from './products.interfaces';
import { DataLoaded } from './products.actions';

describe('productsReducer', () => {
  it('should work', () => {
    const state: Products = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = productsReducer(state, action);
    expect(actual).toEqual({});
  });
});
