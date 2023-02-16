import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const timeout = (delayTime: number) =>
  new Promise((resolve) => setTimeout(resolve, delayTime));

export const TIME_ACTION = {
  CHANGE_TIME_REQUEST: "changeTimeRequest" as const,
  CHANGE_TIME_COMPLETED: "changeTimeCompleted" as const,
};

export type TimeActionType =
  | ReturnType<typeof TimeActionCreator.changeTimeRequest>
  | ReturnType<typeof TimeActionCreator.changeTimeCompleted>;

const TimeActionCreator = {
  changeTimeRequest: () => {
    return { type: TIME_ACTION.CHANGE_TIME_REQUEST };
  },
  changeTimeCompleted: ({ currentTime }: { currentTime: Date }) => {
    return {
      type: TIME_ACTION.CHANGE_TIME_COMPLETED,
      payload: { currentTime: currentTime },
    };
  },
  asyncChangeTime: createAsyncThunk(
    "changeTime",
    async (undefined, thunkAPI) => {
      await timeout(2000);
      return { currentTime: new Date() };
    }
  ),
};

export default TimeActionCreator;
