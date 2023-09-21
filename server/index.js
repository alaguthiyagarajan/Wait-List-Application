const express = require("express");
const cor = require("cors");
const {transporter} = require("./mailset");
const mail = require("./mail");
const db = require("./db");
const ObjectId = db.ObjectId;

let app = express();

app.use(cor());
app.use(express.json());

app.post("/findUser", async (req, res) => {
    console.log("\nfind user operation start")
    console.log(req.body.id);
    let database = await db.getDatabase();
    let collection = database.collection("user");
    if(ObjectId.isValid(req.body.id)){
        await collection.findOne({_id:new ObjectId (req.body.id)}).then((data) => {
            if(data == null){
                console.log("find user invalid id");
                res.status(400).send("null value");
            }
            else{
                console.log(data);
                console.log("find user success");
                res.status(200).send(data);
            }
        }).catch((err) => {
            console.log(err);
            console.log("find user failed");
            res.status(400).send(err);
        });
    }
    else{
        console.log("find user failed in object id phase");
        res.status(400).send("invalid data");
    }
    
    console.log("find user operation completed")
});

app.post("/applyrefer", async (req, res) => {
    console.log("\nreferece start")
    let database = await db.getDatabase();
    let collection = database.collection("user");
    await collection.updateOne({_id:new ObjectId(req.body.id)}, {$inc:{rank:-1}}).then(async (res1)=>{
        let database = await db.getDatabase();
        let collection = database.collection("user");
        await collection.findOne({_id:new ObjectId(req.body.id)}).then((data) => {
            if(data != null){
                if(data.rank <= 1){
                    console.log( "Insertion completed" )
                    let subject = "coupon code ";
                    let text = `Congratulations you've successfully received Iphone coupon code XXXX XXXX XXXX`;
                    mail.sendmail(transporter, data.mail, subject, text);
                }
            }
        })
    })  
    console.log("referece completed");
    res.send("ok");
})

app.post("/updateuser",async (req, res)=>{
    console.log("\nupdate start")
    let database = await db.getDatabase();
    let collection = database.collection("user");
    await collection.updateOne({_id:new ObjectId(req.body.id)}, {$set:{name:req.body.name,mail:req.body.mail}})
    console.log("update completed");
    res.send("ok");
})

app.post("/delete", async (req, res) => {
    console.log("\ndelete start");

    let database = await db.getDatabase();
    let collection = database.collection("user");
    await collection.deleteOne({_id:new ObjectId(req.body.id)});
    console.log("delete completed");
    res.send("ok");
})

app.post("/createuser",async (req, res)=>{
    console.log("\nInsertion operation start")
    console.log(req.body)

    let database = await db.getDatabase();
    let collection = database.collection("user");

    let col = await collection.find().toArray();
    let rank = col.length+99;

    let myobj = {name:req.body.name,mail:req.body.mail,rank}
    await collection.insertOne(myobj).then((res1) => {
        console.log("Insertion completed")
        let subject = "Invite Link";
        let text = `http://localhost:3000/candidate/${res1.insertedId}`;
        mail.sendmail(transporter,req.body.mail,subject,text);
        return res.json({
            message: res1,rank
         });
    }).catch((e) => {
        console.log("Insertion Failed")
        return res.status(400).send(err);
    })
})

app.get("/",async (req, res)=>{
    console.log("\nFind operation start")
    let database = await db.getDatabase();
    let detail = await database.collection("user").find({}).sort({rank:1}).toArray();
    res.json(detail);
    console.log("Find operation Completed")
})

app.listen(3001, () => {
    console.log( "server running at 3001" )
})