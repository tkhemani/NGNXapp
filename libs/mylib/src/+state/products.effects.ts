import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { ProductsState } from './products.interfaces';
import { LoadData, DataLoaded } from './products.actions';

@Injectable()
export class ProductsEffects {
  @Effect()
  loadData = this.d.pessimisticUpdate('LOAD_DATA', {
    run: (a: LoadData, state: ProductsState) => {
      return {
        type: 'DATA_LOADED',
        payload: {}
      };
    },

    onError: (a: LoadData, error) => {
      console.error('Error', error);
    }
  });

  constructor(private actions: Actions, private d: DataPersistence<ProductsState>) {}
}
