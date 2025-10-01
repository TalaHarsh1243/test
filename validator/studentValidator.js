const Joi= require("joi");
exports.createValidator=Joi.object({
    title:Joi.string().min(3).max(30),
  
});
exports.updateValidator=Joi.object({
    title:Joi.string().min(3).max(30),
   
});
exports.validate=(schema,data)=>{
    const{error,value}=schema.validate(data,{abortEarly:false});
  if(error){
    return{
        success:false,
        errors:error.details.map((err)=>({
            field:err.path[0],
            message:err.message,
        })),
    };
  }  
  return{success:true,value};
};