import { CartState } from './cart.reducer';
import { CartProduct } from '../../models/cartProduct';

export function updatedCartState(state: CartState, updatedCartProducts: CartProduct[]): CartState {
  return {
    cartProducts: updatedCartProducts,
    productsCounter: updateItemsCount(updatedCartProducts),
    totalPrice: updateTotalPrice(updatedCartProducts)
  };
}

export const deleteItem = (cartProducts: CartProduct[], cartProduct: CartProduct): CartProduct[] =>
  cartProducts.filter(p => p.stockEntry.id !== cartProduct.stockEntry.id);

export function addItem(cartProducts: CartProduct[], cartProduct: CartProduct): CartProduct[] {
  const itemIndex: number = cartProducts
    .findIndex(i => i.stockEntry.id === cartProduct.stockEntry.id);

  return (itemIndex === -1)
  ? addNewItem(cartProducts, cartProduct)
  : updateItemQuantity(cartProducts, cartProduct, itemIndex);
}

const addNewItem = (cartProducts: CartProduct[], newCartProduct: CartProduct): CartProduct[] =>
  [...cartProducts, newCartProduct];

const updateItemQuantity =
  (cartProducts: CartProduct[], cartProduct: CartProduct, cartProductIndex: number): CartProduct[] => {
    cartProduct.orderedQuantity = cartProducts[cartProductIndex].orderedQuantity++;
    return Object.assign([], cartProducts, {itemIndex: cartProduct});
  };

function updateItemsCount(cartProducts: CartProduct[]): number {
  return cartProducts.reduce(
    (accumulator, currentItem) => accumulator + currentItem.orderedQuantity, 0);
}

function updateTotalPrice(cartProducts: CartProduct[]): number {
  return cartProducts.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price * currentItem.orderedQuantity, 0);
}


