import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

//Define a model
const quoteSchema = new mongoose.Schema(
    {
        text:{
            type:String,
            required: true,
            trim: true,
            minLength:1
        },
    },
    {timestamps:true}
);

const Quote = mongoose.model("Quote", quoteSchema);

//Test api
app.get("/test",(req,res) => {
    res.send("Hello");
});


//Get all quotes
app.get("/api/quotes", async (_req, res) => {
    try{
        const quotes = await Quote.find();
        res.json(quotes);
    }catch(err){
        res.status(500).json({error: "Failed to fetch"})
    }
});


//Post a quote
app.post("/api/quotes", async(req, res) => {
    try{
        const {text} = req.body;

        if(!text || !text.trim()){
            res.status(400).json({error:"There is no text"})
        }

        const created = await Quote.create({text:text.trim()});
        res.status(400).json(created);
    }
    catch(err){
        res.status(500).json({error:"There is no quote to post"});
    }
});

//Put a quote
app.put("/api/quotes/:id", async (req,res) => {
    
    const {text} = req.body;
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({error:"There is no valid Id"});
    }

    if(!text || !text.trim()){
        return res.status(201).json({error:"There is no text to update"});
    }
    
    const updated = await Quote.findByIdAndUpdate(id,
        {text: text.trim()},
        {new: true}
    );

    if(!updated){
        return res.status(404).json({error:"Quote not found"})
    }
    res.json(updated);
    
});

//Delete a quote
app.delete("/api/quotes/:id", async (req, res) => {

  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json({error: "There is no valid ID"});
  }

  const deleted = await Quote.findByIdAndDelete(id);

  if(!deleted){
    return res.status(404).json({error: "Quote not found"});
  }
  res.json(deleted);
})


//Connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => {
    console.error(`MongoDB connection error ${err.message}`);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});