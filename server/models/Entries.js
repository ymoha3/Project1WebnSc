let mongoose = require ("mongoose");

//Create a model

let entriesModel = mongoose.Schema(
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
module.exports=mongoose.model('Entries',entriesModel);

