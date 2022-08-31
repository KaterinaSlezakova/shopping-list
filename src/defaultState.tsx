const getLocalStorage = {
  storedItems: () => {
    let items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      return items;
    } else {
      return {};
    }
  },
};

export const defaultState = {
  items: getLocalStorage.storedItems(),
  showAlert: false,
  alertType: "",
  alertMsg: "",
  editedItem: null,
  isEditing: false,
};
