import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import TodoReducer, { TodoStatesType } from "./TodoReducer";
import TimeReducer, { HomeStatesType } from "./TimeReducer";

export type RootStatesType = {
  home: HomeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({
  home: TimeReducer,
  todos: TodoReducer,
});

const mw1: Middleware = (store) => (next) => (action) => {
  console.log("### mw1 전");
  next(action);
  console.log("### mw1 후");
};

const mw2: Middleware = (store) => (next) => (action) => {
  console.log("### mw2 전");
  next(action);
  console.log("### mw2 후");
  console.log(store.getState());
};

const loggerMW: Middleware = (store) => (next) => (action) => {
  console.log("### action 실행: ", action);
  // console.log("### action 변경 전: ", store.getState());
  next(action);
  // console.log("### action 변경 후 상태: ", store.getState());
};

const AppStore = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(loggerMW);
  },
});
export default AppStore;
