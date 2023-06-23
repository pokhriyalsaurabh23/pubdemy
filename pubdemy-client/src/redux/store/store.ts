import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../reducers/courses.reducer";
import cartReducer from "../reducers/cart.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../saga/sagas";
import loginReducer from "../reducers/login.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    cart: cartReducer,
    login: loginReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
