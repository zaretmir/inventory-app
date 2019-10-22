import { CartState } from './cart.reducer';
import { CartProduct } from '../../models/cartProduct';
import { tassign } from 'tassign';
import { Order } from '../../models/order';

export const addNewCartProduct = (order: Order, newCartProduct: CartProduct): Order => {
  const updatedCartProducts: CartProduct[] = [...order.cartProducts, newCartProduct];

  return updatedOrder(order, updatedCartProducts);
};

export const updateItemQuantity =
(order: Order, cartProduct: CartProduct, index: number): Order => {
  const newQuantity = order.cartProducts[index].orderedQuantity + cartProduct.orderedQuantity;
  const updatedProduct = tassign(order.cartProducts[index], { orderedQuantity: newQuantity });
  const updatedCartProducts = Object.assign([], order.cartProducts, { [index]: updatedProduct });

  return updatedOrder(order, updatedCartProducts);
};

export const deleteItem = (order: Order, cartProduct: CartProduct): Order => {
  const updatedCartProducts: CartProduct[] =
    order.cartProducts.filter(p => p.stockEntry.id !== cartProduct.stockEntry.id);

  return updatedOrder(order, updatedCartProducts);
};

function updatedOrder(order: Order, updatedCartProducts: CartProduct[]): Order {
  return tassign(
    order,
    {
      cartProducts: updatedCartProducts,
      totalProducts: updateItemsCount(updatedCartProducts),
      totalAmount: updateTotalPrice(updatedCartProducts)
    });
}

function updateItemsCount(cartProducts: CartProduct[]): number {
  return cartProducts.reduce(
    (accumulator, currentItem) => accumulator + currentItem.orderedQuantity, 0);
}

function updateTotalPrice(cartProducts: CartProduct[]): number {
  return cartProducts.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price * currentItem.orderedQuantity, 0);
}


