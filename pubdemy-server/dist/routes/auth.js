"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("../models/user.model");
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_model_1.User.findOne({ email });
        if (!user || !user.password) {
            return res.status(401).send("User does not exist");
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (user && !passwordMatch) {
            return res.status(401).send("User is unauthorized");
        }
        // db
        let payload = { name: user.name, lastLogin: "Monday 25th", email: user.email };
        jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY || "OtherSecretKey", { expiresIn: "2 Days" }, (err, token) => {
            if (err)
                console.log(err);
            else
                return res.json({ token, status: true, user });
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error while trying to login try after sometime');
    }
}));
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const passwordHash = yield bcrypt_1.default.hash(newUser.password, 10);
        const newData = Object.assign(Object.assign({}, newUser), { password: passwordHash });
        let newUserToBeInserted = new user_model_1.User(Object.assign({}, newData));
        const data = yield newUserToBeInserted.save();
        res.json({ user: data, status: true });
    }
    catch (error) {
        res.status(500).send('Error while trying to sign up try after sometime');
    }
}));
exports.default = router;
