const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('Mongodb connected successfully');
    }
    else{
        console.log('Erroe in mongodb '+err);
    }
});
require('./employee.model')