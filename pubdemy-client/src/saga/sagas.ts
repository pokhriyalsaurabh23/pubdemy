import { call, takeLatest, put, retry } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import axios from "axios";
import { CourseModel } from "../models/course.model";
import { deleteCourse, setCourses } from "../redux/reducers/courses.reducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/user.model";
import { addExistingUser } from "../redux/reducers/login.reducer";

type Response = {
  data: any;
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

function GetCourses(payload: any) {
  if(payload.query){
    return axios.get<CourseModel[]>(`http://localhost:4000/courses?search=${payload.query}`, {
    headers: {
      Authorization: `Bearer ${localStorage["auth-token"]}`,
    },
  });
  }
  else{
    return axios.get<CourseModel[]>(`http://localhost:4000/courses`, {
      headers: {
        Authorization: `Bearer ${localStorage["auth-token"]}`,
      },
    });
  }
}

function AuthenticateUserFromServer(user: UserModel) {
  return axios.post("http://localhost:4000/auth/login", { email: user.email, password: user.password });
}

function FetchCourseById(id: number) {
  return axios.delete("http://localhost:4000/courses/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage["auth-token"]}`,
    },
  });
}

//Worker Saga
export function* fetchCourses(action: PayloadAction<string>) {
  try {
    const response: Response = yield call(GetCourses, action.payload);
    yield put(setCourses(response.data)); // dispatching
  } catch (error) {
    //yield put(handleError(error)); // dispatching an action with Error message as payload
  }
}

export function* authenticateUser(action: PayloadAction<UserModel>) {
  let user: UserModel = action.payload;
  let response: Response = yield call(AuthenticateUserFromServer, user);
  if (response.data.status) {
    localStorage["auth-token"] = response.data.token;
    localStorage["user"] = JSON.stringify(response.data.user);
    yield put(addExistingUser({ user, isUserAuthenticated: true })); // dispatching
  }
}

export default function* rootSaga() {
  yield takeLatest(sagaActions.FETCH_COURSES_SAGA_ACTION, fetchCourses);
  yield takeLatest(sagaActions.AUTHENTICATE_USER, authenticateUser);
}
