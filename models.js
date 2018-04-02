const mongoose = require('mongoose');
const schema= mongoose.Schema;

const userSchema= new schema({
  name: {
     type:String,
     required:[true,'Name field is required'] 
},
designation:{
      type:String,
     required:[true,'Designation field is required']

},
experience:{
      type:String,
     required:[true,'Experience field is required'] 
},

country:{
      type:String,
     required:[true,'Country field is required'] 
},

salary:{
      type:String,
     required:[true,'Salary field is required'] 
},


});

const User= mongoose.model('user',userSchema);


module.exports = User;