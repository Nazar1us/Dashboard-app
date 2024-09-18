import { ADD_CLEAR, ADD_FILTER, ADD_REMOVE } from "./filter-action";

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CLEAR: {
      return [];
    }
    case ADD_FILTER: {
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    }
    case ADD_REMOVE: {
      return state.filter((item) => item !== action.filter);
    }
    default:
      return state;
  }
};
