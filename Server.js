"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import authRoutes, {authenticateToken} from "./routes/auth-routes";
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(bodyParser.json());
app.use((0, cors_1.default)({ origin: '*' }));

app.listen(3003, () => {
    console.log("Server running on port 3003");
});
