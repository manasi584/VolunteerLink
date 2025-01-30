const { validateToken } = require("../services/authentication");

async function restrictToLoggedInUserOnly(req,res,next){
    const token=req.cookies?.token;

    if(!token) return res.redirect("/api/auth/register");

    try{
        const userPayload=validateToken(token);

    req.user=userPayload;
        
    }
    catch(error){}
    

    
next();
}

function checkforAuthenticationCookie(cookieName){
return (req,res,next)=>{
    const CookieValue= req.cookies[cookieName];
    if(!CookieValue) return next();
    
    try{
        const userPayload=validateToken(CookieValue);

        req.user=userPayload;
        
    }
    catch(error){}
    return next();
}
}


module.exports={
    checkforAuthenticationCookie,
    restrictToLoggedInUserOnly
}