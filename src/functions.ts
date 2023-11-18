import { Food } from './types/Food';
import { Drink } from './types/Drink';
import { CartItem } from './types/CartItem';

export function first<T>(items: T[]): T {
  return items[0];
}

export function updateItem<T>(item: T[], index: number, updatedItem: T): T[] {
  if (index >= 0 && index < item.length) { item.splice(index, 1, updatedItem); }
  return item;
}

export function buildCartItem({ name, price }: Food | Drink, quantity: number): CartItem {
  return {
    name,
    price,
    quantity,
  } as CartItem;
}