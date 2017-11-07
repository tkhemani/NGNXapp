import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './+state/products.reducer';
import { productsInitialState } from './+state/products.init';
import { ProductsEffects } from './+state/products.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer, { initialState: productsInitialState }),
    EffectsModule.forFeature([ProductsEffects])
  ],
  providers: [ProductsEffects]
})
export class MylibModule {}
