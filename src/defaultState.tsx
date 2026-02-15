export type ItemType = {
  id: string;
  name: string;
  completed: boolean;
};
export type StateType = {
  items: Record<string, ItemType>; 
  showAlert: boolean;
  alertType: string;
  alertMsg: string;
  editedItem: ItemType | null;
  isEditing: boolean;
};

const getLocalStorage = {
  storedItems: (): Record<string, ItemType> => {
    const stored = localStorage.getItem("items");

    if (!stored) return {};

    try {
      return JSON.parse(stored) as Record<string, ItemType>;
    } catch {
      return {};
    }
  },
};

export const defaultState: StateType = {
  items: getLocalStorage.storedItems(),
  showAlert: false,
  alertType: "",
  alertMsg: "",
  editedItem: null,
  isEditing: false,
};
