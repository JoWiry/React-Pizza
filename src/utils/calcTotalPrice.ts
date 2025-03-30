import { CartItem } from "../redux/slices/cart/types";


export const calcTotalprice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};
