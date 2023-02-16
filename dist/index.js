"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_2 = require("express");
dotenv_1.default.config();
const PORT = process.env.PORT;
const mongoose_1 = __importDefault(require("./config/mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use((0, express_2.json)());
app.use((0, express_2.urlencoded)({ extended: true }));
app.use('/api', routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ status: true });
});
(0, mongoose_1.default)();
app.listen(PORT, () => {
    console.log(`Server now live at port ${PORT}`);
});