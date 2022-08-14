import { ACTIONS } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        showAlert: true,
        alertType: "success",
        alertMsg: "Item added in list",
      };
    case ACTIONS.EDIT_ITEM:
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        editedItem: findItem,
        isEditing: true,
      };
    case ACTIONS.SAVE_EDITED_ITEM:
      const editedItem = state.items.find(
        (item) => item.id === state.editedItem.id
      );
      const updatedItem = {
        ...editedItem,
        id: new Date().getTime().toString(),
        name: action.payload.name,
        complete: false,
      };
      return {
        ...state,
        items: [...state.items, updatedItem],
        showAlert: true,
        alertType: "primary",
        alertMsg: "Item has been edited",
        editedItem: null,
        isEditing: false,
      };

    case ACTIONS.NO_VALUE:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertMsg: "Please type an item",
      };

    case ACTIONS.DELETE_ITEM:
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: filteredItems,
        showAlert: true,
        alertType: "warning",
        alertMsg: "Item has been removed",
      };
    case ACTIONS.TOGGLE_ITEM:
      const toggledItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
      return {
        ...state,
        items: toggledItems,
      };
    case ACTIONS.CLEAR_ALL:
      return {
        ...state,
        items: [],
        showAlert: true,
        alertType: "info",
        alertMsg: "List has been cleared",
      };
    case ACTIONS.CLOSE_ALERT:
      return { ...state, showAlert: false };
    default:
      throw new Error("this is an error");
  }
};
