import { ACTIVE_ITEM } from "./actionTypes";

export const activeItem = item => ({
  type: ACTIVE_ITEM,
  item
});
