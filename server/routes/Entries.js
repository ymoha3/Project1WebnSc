let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Entries = require('../models/Entries');

// get -- extract and read
// post -- post something
// put -- edit/update data
// delete -- delete data
// CRUD -- Create, Read, Update & Delete

//get route for Read
router.get('/',async(req,res,next)=>{
    try
    {
        const EntriesList = await Entries.find();
        console.log(EntriesList);
        res.render('Entries/list',{
            title: 'Diary Entries',
            EntriesList:EntriesList
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Entries/list',{
            error:'Error on server'
         })
    }

})

//get route for displaying the Add page - Create
router.get('/add', async(req,res,next)=>{
    try{
        res.render('Entries/add',{
            title:'Add an Entry'

        })

    }
    catch(err)
    {
        console.error(err);
        res.render('Entries/list',{
            error:'Error on server'
         })
    }

})
//post route for processing the Add page - Create
router.post('/add', async(req,res,next)=>{
    try
    {
        let newEntries = Entries({
            "EntryNum":req.body.EntryNum,
            "Title":req.body.Title,
            "Message":req.body.Message,
            "Date":req.body.Date,
            "Month":req.body.Month,
            "Year":req.body.Year
        });
        Entries.create(newEntries).then(()=>{
            res.redirect('/Entries')
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Entries/add',{
            error:'Error on server'
         })
    }
})
//get route for displaying the Edit page - Update
router.get('/edit/:id', async(req, res, next)=>{
    try{
        const id = req.params.id;
        const EntriesToEdit = await Entries.findById(id);
        res.render("Entries/edit",
            {
                title: 'Edit Entry',
                Entries: EntriesToEdit
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
})
//post route for processing the Edit page - Update
router.post('/edit/:id', async(req,res,next)=>{
    try
    {
        let id = req.params.id;
        let updateEntries = Entries({
            "_id": id,
            "EntryNum":req.body.EntryNum,
            "Title":req.body.Title,
            "Message":req.body.Message,
            "Date": req.body.Date,
            "Month": req.body.Month,
            "Year": req.body.Year
        })
        Entries.findByIdAndUpdate(id,updateEntries).then(()=>{
            res.redirect("/Entries")
        })
    }
      catch(err)
    {
        console.log(err);
        next(err);
    }

})
//get route for preforming Delete operation - Delete
router.get('/delete/:id', async(req,res,next)=>{
    try
    {
        let id = req.params.id;
        Entries.deleteOne({_id:id}).then(()=>{
            res.redirect("/Entries")
        })

    }
      catch(err)
    {
        console.log(err);
        next(err);
    }
    

})


module.exports = router;