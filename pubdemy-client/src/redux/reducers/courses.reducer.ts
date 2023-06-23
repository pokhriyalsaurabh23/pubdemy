import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";

// a good solution would be to have initialState to contain -> {loading:true,error,courses:[]}
let initialState: CourseModel[] = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    incrementLikes: (store, action: PayloadAction<number>) => {
      let index = store.findIndex(course => course.id === action.payload);
      store[index].likes++;
      return store;
    },
    deleteCourse: (store, action: PayloadAction<number>) => {
      store = store.filter(c => c.id !== action.payload);
      return store;
    },
    setCourses: (store, { payload }: PayloadAction<CourseModel[]>) => {
      return payload;
    },
    addCourse: (store, action: PayloadAction<CourseModel>) => {
      store.push(action.payload);
      return store;
    },
  },
});

export const { incrementLikes, deleteCourse, setCourses,addCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
