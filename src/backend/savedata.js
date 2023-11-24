import express from 'express';
import fs from 'fs';
import multer from 'multer';
import cors from 'cors';
const app = express();
const port = 3000;

const upload = multer()
let existingData = [];

app.use(cors());
app.post('/submit', upload.none(), async (req,res)=>{
    console.log("The req body object:", req.body);

    let {name, birthdate, imageURL} = req.body;
    const user = {
        name,
        birthdate,
        imageURL,
      };
    console.log("user data is:", user);
    
    try{
        //@dev Read the existing data
        
        const fileContent = fs.readFileSync("data.json", 'utf-8');
        existingData = fileContent ? JSON.parse(fileContent) : [];

        existingData.push(user);

        //@dev the data to the JSON file.
        fs.writeFile("data.json",JSON.stringify(existingData,null,2),(err)=>{
            if(err) throw err;
            res.status(200).json({ success: true, message: "User data saved successfully." });
            console.log("Data Successfully added to JSON");
        });
        
    }
    catch(error){
        console.error("Error saving user data:", error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})



