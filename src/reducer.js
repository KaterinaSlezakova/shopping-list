import { ACTIONS } from "./actions";
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const newItems = {
        ...state.items,
        [action.payload.newItem.id]: action.payload.newItem,
      };
      return {
        ...state,
        items: newItems,
        showAlert: true,
        alertType: "success",
        alertMsg: "Item added in list",
      };
    case ACTIONS.EDIT_ITEM:
      // const findItem = state.items.find(
      //   (item) => item.id === action.payload.id
      // );
      const findItem = state.items[action.payload.id];

      return {
        ...state,
        editedItem: findItem,
        isEditing: true,
      };
    case ACTIONS.SAVE_EDITED_ITEM:
      // const item = state.items.find((item) => item.id === state.editedItem.id);
      const item = state.items[state.editedItem.id];
      const updatedItem = {
        ...item,
        name: action.payload.name,
      };

      return {
        ...state,
        items: {
          ...state.items,
          [updatedItem.id]: updatedItem,
        },
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
      // const filteredItems = state.items.filter(
      //   (item) => item.id !== action.payload.id
      // );
      const { [action.payload.id]: omittedItem, ...filteredItems } = state.items;
      return {
        ...state,
        items: filteredItems,
        showAlert: true,
        alertType: "warning",
        alertMsg: "Item has been removed",
      };
    case ACTIONS.TOGGLE_ITEM:
      const toggledItem = state.items[action.payload.id];

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...toggledItem,
            complete: !toggledItem.complete,
          }
        },
      };
    case ACTIONS.CLEAR_ALL:
      return {
        ...state,
        items: {},
        showAlert: true,
        alertType: "info",
        alertMsg: "List has been cleared",
      };
    case ACTIONS.CLOSE_ALERT:
      return { ...state, showAlert: false, alertType: "", alertMsg: "" };
    default:
      throw new Error("this is an error");
  }
};
