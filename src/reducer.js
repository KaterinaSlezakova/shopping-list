import { ACTIONS } from "./App";

export const reducer = (items, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return [...items, newItem(action.payload.name)];
    case ACTIONS.DELETE_ITEM:
      const filteredItems = items.filter(
        (item) => item.id !== action.payload.id
      );
      return filteredItems;
    case ACTIONS.TOGGLE_ITEM:
      const toggledItems = items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, complete: true };
        }
        return item;
      });
      return toggledItems;
    case ACTIONS.CLEAR_ALL:
      return [];
    default:
      throw new Error("this is an error");
  }
};
function newItem(name) {
  return { id: new Date().getTime().toString(), name: name, complete: false };
}
