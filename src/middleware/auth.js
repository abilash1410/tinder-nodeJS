const ADMIN_AUTH = (req,res,next) =>{
    const token = 'abilash141';
    const isAdminAuthenticated = token === 'abilash1410';
    if(!isAdminAuthenticated){
        res.status(500).send("Admin not authenticated");
    }else{
        next();
    }

}

const USER_AUTH = (req,res,next) => {
    const token = 'revathyy';
    const isUserAuthenticated = token === 'revathy';
    if(!isUserAuthenticated){
        res.status(500).send("User not authenticated");
    }else{
        next();
    }

}

module.exports = {ADMIN_AUTH,USER_AUTH}