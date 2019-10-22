import { Action } from '@ngrx/store';
import { StockEntry } from '../../models/stock-entry';

export enum StockActionTypes {
  LOAD_PRODUCT_STOCK_ENTRIES = '[Stock] Load stock entries data by product',
  LOAD_SELECTED_PRODUCT_STOCK_ENTRIES = '[Stock] Load stock entries data by product param',
  PRODUCT_STOCK_ENTRIES_LOADED = '[Stock] Product stock entries loaded',
  LOAD_HANGAR_STOCK_ENTRIES = '[Stock] Load stock entries data by hangar',
  LOAD_SELECTED_HANGAR_STOCK_ENTRIES = '[Stock] Load stock entries data by hangar param',
  HANGAR_STOCK_ENTRIES_LOADED = '[Stock] Hangar stock entries loaded',
  UPDATE_STOCK = '[Stock] Update stock entry data',
  STOCK_UPDATED = '[Stock] Stock entry data updated',
  DELETE_STOCK = '[Stock] Delete stock entry',
  STOCK_DELETED = '[Stock] Stock entry deleted',
  SELECT_PRODUCT = '[Stock] Product selected',
  SELECT_HANGAR = '[Stock] Hangar selected'
}

export class LoadProductStock implements Action {
  readonly type = StockActionTypes.LOAD_PRODUCT_STOCK_ENTRIES;
  constructor(public productId: number) {}
}

export class LoadSelectedProductStock implements Action {
  readonly type = StockActionTypes.LOAD_SELECTED_PRODUCT_STOCK_ENTRIES;
  constructor() {}
}

export class ProductStockLoaded implements Action {
  readonly type = StockActionTypes.PRODUCT_STOCK_ENTRIES_LOADED;
  constructor(public stockEntries: StockEntry[]) {}
}

export class LoadHangarStock implements Action {
  readonly type = StockActionTypes.LOAD_HANGAR_STOCK_ENTRIES;
  constructor(public hangarId: number) {}
}

export class LoadSelectedHangarStock implements Action {
  readonly type = StockActionTypes.LOAD_SELECTED_HANGAR_STOCK_ENTRIES;
  constructor() {}
}

export class HangarStockLoaded implements Action {
  readonly type = StockActionTypes.HANGAR_STOCK_ENTRIES_LOADED;
  constructor(public stockEntries: StockEntry[]) {}
}

export class UpdateStockEntry implements Action {
  readonly type = StockActionTypes.UPDATE_STOCK;
  constructor(public stockEntry: StockEntry) {}
}

export class StockEntryUpdated implements Action {
  readonly type = StockActionTypes.STOCK_UPDATED;
  constructor(public stockEntry: StockEntry) {}
}

export class SelectProduct implements Action {
  readonly type = StockActionTypes.SELECT_PRODUCT;
  constructor(public productId: number) {}
}

export class SelectHangar implements Action {
  readonly type = StockActionTypes.SELECT_HANGAR;
  constructor(public hangarId: number) {}
}

export type StockAction = LoadProductStock
| LoadSelectedProductStock
| ProductStockLoaded
| LoadHangarStock
| LoadSelectedProductStock
| HangarStockLoaded
| UpdateStockEntry
| StockEntryUpdated
| SelectProduct
| SelectHangar;

