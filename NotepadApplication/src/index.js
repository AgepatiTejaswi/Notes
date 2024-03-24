const express =require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://agepatitejaswi:Teju@gowri4@cluster0.3ln2kpf.mongodb.net/NotepadDB",{useNewUrlParser:true},
{useUnifiedTopology:true});


const notesSchema=
{
    description:String
}

const notes=mongoose.model("notes",notesSchema);



app.get("/",function(req,res){
    res.send("Express is working")
   // res.sendFile(__dirname+"/index.html");
})



app.post("/",function(req,res){
    console.log("req.body....",req.body)
    let newNote=new notes({
        description:req.body.notes
    })
    newNote.save();
    res.redirect('/');
})

app.listen(4200,function(){
    console.log("Server is running at 4200");
})