"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const courses_route_1 = __importDefault(require("./routes/courses.route"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.ONLINETRAININGDB_MONGO_CONNECTION_STRING || "", {});
mongoose_1.default.connection.on("open", () => {
    console.log(`Online Training DB connected !`);
});
const app = (0, express_1.default)();
const port = process.env.PORT;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/", courses_route_1.default);
app.listen(port, () => {
    console.log(`Server running @ port ${port} !`);
});
