const {generateReadmeContent} = require("../services/readmeGenerator");

exports.generateReadme = async(req,res)=>{
  try{
    const content = await generateReadmeContent(req.body);
    res.status(200).json({readme: content});
  }catch(err){
    res.status(500).json({error: err.message});
  }
};