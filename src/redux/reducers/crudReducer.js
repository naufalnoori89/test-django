import { ActionTypes } from "../constants/action-type";

const initialState = [];

export const crudReducer = (tutorials = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.CREATE_TUTORIAL:
      return [...tutorials, payload];

    case ActionTypes.RETRIEVE_TUTORIAL:
      return payload;

    case ActionTypes.UPDATE_TUTORIAL:
      return tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });

    case ActionTypes.DELETE_TUTORIAL:
      return tutorials.filter(({ id }) => id !== payload.id);

    case ActionTypes.DELETE_ALL_TUTORIALS:
      return [];

    default:
      return tutorials;
  }
};
