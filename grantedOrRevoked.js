let user = {
    name: "Alice",
    role: "admin",
    active: true
   };
    
    if(user.role == "admin" && user.active==false){
        console.log("Admin Access Revoked")
    }else{
        console.log("Adimin Access Granted!")
    }
