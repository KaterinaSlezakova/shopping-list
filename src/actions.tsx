import { ItemType } from "./defaultState";
export const ACTIONS = {
  ADD_ITEM: "add item",
  DELETE_ITEM: "delete item",
  TOGGLE_ITEM: "toggle item",
  CLEAR_ALL: "clear list",
  CLOSE_ALERT: "close alert",
  NO_VALUE: "no value",
  EDIT_ITEM: "edit item",
  SAVE_EDITED_ITEM: "save an edited item",
} as const;

export type Action =
  | { type: typeof ACTIONS.ADD_ITEM; payload: { newItem: ItemType } }
  | { type: typeof ACTIONS.EDIT_ITEM; payload: { id: number } }
  | { type: typeof ACTIONS.SAVE_EDITED_ITEM; payload: { name: string } }
  | { type: typeof ACTIONS.DELETE_ITEM; payload: { id: number } }
  | { type: typeof ACTIONS.TOGGLE_ITEM; payload: { id: number } }
  | { type: typeof ACTIONS.NO_VALUE }
  | { type: typeof ACTIONS.CLEAR_ALL }
  | { type: typeof ACTIONS.CLOSE_ALERT };