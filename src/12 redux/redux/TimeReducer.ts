import { TimeActionType, TIME_ACTION } from "./TimeActionCreator";

const initialState = {
  currentTime: new Date(),
  isChanging: false,
};

export type HomeStatesType = { currentTime: Date; isChanging: boolean };

const TimeReducer = (state = initialState, action: TimeActionType) => {
  switch (action.type) {
    case TIME_ACTION.CHANGE_TIME_REQUEST:
      return { ...state, isChaning: true };
    case TIME_ACTION.CHANGE_TIME_COMPLETED:
      return {
        ...state,
        currentTime: action.payload.currentTime,
        isChaning: false,
      };
    case TIME_ACTION.CHANGE_TIME_FAILED:
      return { ...state, isChaning: false };
    default:
      return state;
  }
};
export default TimeReducer;
