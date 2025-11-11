const mongoose = require('mongoose');
const express= require('express');
const app = express();
const db = require('./db');
const Person = require('./person');

////////////////////////////////////////////////////
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/////////////////////////////////////////////////////

app.get("/",(req,res)=>{
    res.send("how can i help you ")
});
app.get('/idli',(req,res)=>{
    res.send("i would love to serve you idli ")
});
// app.post("/mydata",async(req,res)=>{
//    try {
//         const data = req.body;
//         const newPerson = new Person(data);
//         const savedPerson = await newPerson.save();
//         res.status(201).json(savedPerson);
//         console.log("saved data persondScheema");   
//    } catch (error) {
//         console.error('error saving person ',error);
//         res.status(500).json({error:' error internal server'})
//    }
// })

// app.get('/mydata',async(req,res)=>{
//     try {
//         let data = await Person.find();
//         // res.json(data);
//         console.log("data saved  ");
//         res.status(201).json(data);
//     } catch (error) {
//         console.error('error fetching persons',error);
//         res.status(500).json({error:'internal error'});
//     }
// })
/////////////////////////////////////////////////////////////////////////////
// app.get('/mydata/:workType',async(req,res)=>{
//         try {
//             const workType = req.params.workType;
//             if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
//                 const response = await Person.find({work:workType});
//                 console.log("fetched data by worktype");
//                 res.status(201).json(response)
//             } else {
//                 console.log("error line 49");
//                 res.status(401).json(" error 50");
                
//             }
            
//         } catch (error) {
//               console.log("error catch line 55");
//                 res.status(401).json({error: " error 50"});
//         }
// });
//////////////////////////////////////////////////////////////////////////
const routers = require('./Router');
app.use("/mydata" , routers)
app.listen(3000,()=>{
    console.log("m listening ur port on 3000");
});




