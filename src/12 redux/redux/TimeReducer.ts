import TimeActionCreator from "./TimeActionCreator";
import { TimeActionType, TIME_ACTION } from "./TimeActionCreator";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentTime: new Date(),
  isChanging: false,
};

export type HomeStatesType = { currentTime: Date; isChanging: boolean };
const TimeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TimeActionCreator.asyncChangeTime.pending, (state, action) => {
      state.isChanging = true;
    })
    .addCase(TimeActionCreator.asyncChangeTime.fulfilled, (state, action) => {
      state.currentTime = action.payload.currentTime;
      state.isChanging = false;
    });
});
export default TimeReducer;
