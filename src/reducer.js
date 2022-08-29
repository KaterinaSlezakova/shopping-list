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
        editedItem: null,
        isEditing: false,
      };
    case ACTIONS.EDIT_ITEM:
      const findItem = state.items[action.payload.id];

      return {
        ...state,
        showAlert: true,
        alertMsg: `You are editing ${findItem.name.toUpperCase()}`,
        alertType: "info",
        editedItem: findItem,
        isEditing: true,
      };
    case ACTIONS.SAVE_EDITED_ITEM:
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
        editedItem: null,
        isEditing: false,
      };

    case ACTIONS.DELETE_ITEM:
      const {
        [action.payload.id]: omittedItem,
        ...filteredItems
      } = state.items;
      return {
        ...state,
        items: filteredItems,
        showAlert: true,
        alertType: "danger",
        alertMsg: "Item has been removed",
        // editedItem: null,
        // isEditing: false,
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
          },
        },
        // showAlert: true,
        // alertType: "secondary",
        // alertMsg: "You toggled an item",
        // // editedItem: null,
        // // isEditing: false,
      };
    case ACTIONS.CLEAR_ALL:
      return {
        ...state,
        items: {},
        showAlert: true,
        alertType: "info",
        alertMsg: "List has been cleared",
        // editedItem: null,
        // isEditing: false,
      };
    case ACTIONS.CLOSE_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertMsg: "",
        isEditing: false,
      };
    default:
      throw new Error("this is an error");
  }
};
