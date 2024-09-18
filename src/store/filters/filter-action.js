export const ADD_FILTER = "ADD_FILTER";
export const ADD_REMOVE = "ADD_REMOVE";
export const ADD_CLEAR = "ADD_CLEAR";

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

export const removeFilter = (filter) => ({
  type: ADD_REMOVE,
  filter,
});

export const clearFilter = {
  type: ADD_CLEAR,
};
