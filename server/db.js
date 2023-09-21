const mongodb = require("mongodb")
const MongoClient=mongodb.MongoClient;
const ObjectId=mongodb.ObjectId;

//Database Connection
const url = "mongodb+srv://alaguthiyagarajan:alaguthiyagarajan@demo.azcfhdp.mongodb.net/?retryWrites=true&w=majority";

async function getDatabase(){
    let connection = await MongoClient.connect( url );
    let database = connection.db( "waitList" );
    if(!database){
        console.log( "database not connected" )
    }
    return database;
}

module.exports={getDatabase, ObjectId}
