let mongoose = require ("mongoose");

//Create a model

let entriesModel = mongoose.Schema(
    {
    
    Year: Number,
    Month: Number,
    Date: Number,
    EntryNum: Number,
    Title: String,
    Message:String

    },
    {
        collection: "Entries"    
    }
);
module.exports=mongoose.model('Entries',entriesModel);

