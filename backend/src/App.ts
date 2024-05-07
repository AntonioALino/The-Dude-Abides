import  express  from "express";
import config  from "config";

const app = express();

const port = config.get<number>("port")

app.use(express.json())

app.listen(port, async ()=>{

})