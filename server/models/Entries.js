let mongoose = require ("mongoose");

//Create a model

let EntriesModel = mongoose.Schema(
    {
    
    EntryNum: Number,
    Title: String,
    Message:String,
    Date: Number,
    Month: Number,
    Year: Number
    
    },
    {
        collection: "Entries"    
    }
);
module.exports=mongoose.model('Entries',EntriesModel);

