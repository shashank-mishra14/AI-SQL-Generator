import express,{Application,Request,Response} from 'express'
import cors from "cors"
import {Configuration,OpenAIApi} from "openai"


const PORT: number = 8000

const app: Application = express()

app.use(cors())
app.use(express.json())

const API_KEY:string='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'


