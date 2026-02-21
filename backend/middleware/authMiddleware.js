
export const validateUser = (req,res,next)=>{
    const {name , password , email} =req.body;
    const path = req.route.path;

    if (!email ){
        return res.status(400).json({message:"Email required"});
    }
    if(path !== '/subscribe' && !password ){
        return res.status(400),json({message:"Password is required"})
    }
    if(path == '/signup' && !name){
        return res.status(400).json({message:"Name required"})
    }
    next();
}