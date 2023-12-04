import { combineReducers } from "redux";
import certificateReducer from "./certificateReducer";

const rootReducer = combineReducers({
  certificates: certificateReducer,
});

export default rootReducer;
