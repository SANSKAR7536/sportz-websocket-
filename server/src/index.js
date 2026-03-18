import "dotenv/config";
import connectDB from './db/database.js';
import {app} from "./app.js"





connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`serrver is running  ${process.env.PORT}`);
    
  })
})
.catch((error)=>{
  console.log(error);
  
})