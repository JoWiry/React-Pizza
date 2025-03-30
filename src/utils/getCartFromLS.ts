import { CartItem } from "../redux/slices/cart/types";
import { calcTotalprice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalprice(items);

  return {
    items: items as CartItem[],
    totalPrice,
  };
};
