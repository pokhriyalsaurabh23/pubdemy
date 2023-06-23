"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CourseSchema = new Schema({
    id: Number,
    title: String,
    price: Number,
    discountedPrice: Number,
    rating: Number,
    studentsEnrolled: Number,
    likes: Number,
    trainerName: String,
    imageUrl: String,
    avatarUrl: String,
    introVideo: String,
    description: String,
});
exports.Course = mongoose_1.default.model("courses", CourseSchema);
