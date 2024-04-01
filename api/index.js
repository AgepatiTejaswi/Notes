var Express=require("express");
var MongoClient=require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");



var app=Express();
app.use(cors());


var Connection_String="mongodb+srv://agepatitejaswi:Teju%40gowri4@cluster0.3ln2kpf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var DATABASENAME = "NotepadDB";
var database;


app.listen(5038,()=>{
    MongoClient.connect(Connection_String,(error,client)=>{
        database=client.db(DATABASENAME);
        console.log("Mongodb connection is successful");
    })
})


app.get('/api/NotesApp/GetNotes',(request,response)=>{
    database.collection("notes").find({}).toArray((error,result)=>{
        response.send(result);
    })
})


app.post('/api/NotesApp/AddNotes',multer().none(),(request,response)=>{
    console.log("Request....",request.body);
    database.collection("notes").insertOne({
        description:request.body.description
    })
    response.json("Added Successfully");
})
