var mongoose = require('mongoose');
const monngodb_url = "mongodb+srv://JuanseUrda:4063sebas@clusterprogweb.jaqne.mongodb.net/inmobiliarias?retryWrites=true&w=majority"
//"mongodb+srv://JuanseUrda:4063sebas@clusterprogweb.jaqne.mongodb.net/inmobiliarias?retryWrites=true&w=majority"



mongoose.connect(monngodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mondb not connected");
    console.log(error);
});