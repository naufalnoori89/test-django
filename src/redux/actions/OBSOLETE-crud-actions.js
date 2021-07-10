import { ActionTypes } from "../constants/action-type";
import api from "../../apis/axios";

export const retrieveTutorials = () => async (dispatch) => {
  try {
    const response = await api.get("/tutorials");
    dispatch({ type: ActionTypes.RETRIEVE_TUTORIAL, payload: response.data });
  } catch (err) {
    return console.log(err);
  }
};

export const findTutorialsByTitle = (title) => async (dispatch) => {
  try {
    const response = await api.get(`/tutorials?title=${title}`);
    dispatch({ type: ActionTypes.RETRIEVE_TUTORIAL, payload: response.data });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createTutorial = (data) => async (dispatch) => {
  try {
    const response = await api.post("/tutorials", data);

    dispatch({
      type: ActionTypes.CREATE_TUTORIAL,
      payload: response.data,
    });

    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await api.put(`/tutorials/${id}`, data);

    dispatch({
      type: ActionTypes.UPDATE_TUTORIAL,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await api.delete(`/tutorials/${id}`);

    dispatch({
      type: ActionTypes.DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await api.delete(`/tutorials`);

    dispatch({
      type: ActionTypes.DELETE_ALL_TUTORIAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
