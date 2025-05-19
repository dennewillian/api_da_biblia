import express from "express"
import cors from "cors"

import { localizacao, personagens } from "./constants"

const app = express();
const PORT = express.env.PORT || 3000;

app.use(cors());
app.use(express.json());
