const express = require('express');
const router = express.Router();
const Person = require('./person')
router.post("/",async(req,res)=>{
   try {
        const data = req.body;
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        res.status(201).json(savedPerson);
        console.log("saved data persondScheema");   
   } catch (error) {
        console.error('error saving person ',error);
        res.status(500).json({error:' error internal server'})
   }
})
router.get('/',async(req,res)=>{
    try {
        let data = await Person.find();
        // res.json(data);
        console.log("data saved  ");
        res.status(201).json(data);
    } catch (error) {
        console.error('error fetching persons',error);
        res.status(500).json({error:'internal error'});
    }
})

router.get('/:workType',async(req,res)=>{
        try {
            const workType = req.params.workType;
            if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
                const response = await Person.find({work:workType});
                console.log("fetched data by worktype");
                res.status(201).json(response)
            } else {
                console.log("error line 49");
                res.status(401).json(" error 50");
                
            }
            
        } catch (error) {
              console.log("error catch line 55");
                res.status(401).json({error: " error 50"});
        }
});
    //  UPDATED DATA BY ID BY USE OF PUT METHODS:>
//////////////////////////////////////////////////////////////////////////////////////////////////////////
 router.put('/:id', async (req, res) => {
 try {
 const personId = req.params.id; // Extract the person's ID
//  from the URL parameter
 const updatedPersonData = req.body; // Updated data for the person
 // Assuming you have a Person model
 const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
});
 if (!response) {
 return res.status(404).json({ error: 'Person not found'
 });
 }
 // Send the updated person data as a JSON response
 res.status(200).json(response);
 console.log("data updated");
 
 } catch (error) {
 console.error('Error updating person:', error);
 res.status(500).json({ error: 'Internal server error' });
 }
 });

// DELETE METHODS ARE USE TO DELEDATA FROM DBS 
 //////////////////////////////////////////////////////////////////////////////////////////////////////////
router.delete('/:id', async (req, res) => {
 try {
 const personId = req.params.id; // Extract the person's ID
//  from the URL parameter
 // Assuming you have a Person model
// const response = await Person.findByAndRemove(personId);
// const response = await Person.findByIdAndRemove(personId);
const response = await Person.findByIdAndDelete(personId);


 if (!response) {
 return res.status(404).json({ error: 'Person not found' });
 }
 // Send a success message as a JSON response
 res.status(200).json({ message: 'Person deleted successfully' });
 } catch (error) {
 console.error('Error deleting person:', error);
 res.status(500).json({ error: 'Internal server error 85' });
 }
 })

 // mmodify the file
module.exports=router;                                                                  