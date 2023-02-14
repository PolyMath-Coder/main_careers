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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const DB_URL = process.env.DB_URL;
const connectToDatabase = () => {
    const DB_URL = process.env.DB_URL;
    const options = { autoIndex: false, maxPoolSize: 10 };
    mongoose_1.default
        .connect('mongodb+srv://Ayoluwa:%40Faithie123@cluster0.nm9b8.mongodb.net/main_careers')
        .then((result) => {
        console.log(`Database now Connected...`);
    });
    const database = mongoose_1.default.connection;
    database.on('connected', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Database now Connected...');
    }));
    mongoose_1.default.connection.on('error', (err) => {
        console.log('An error occurred while connecting to MongoDB', err);
    });
};
exports.default = connectToDatabase;
