//--function for checking authentication
module.exports = {
    auth: (req, res, next) => {

        //--get Authentication Key
        var authorization = req.header('Authorization');
        var array_auth = authorization.split(' ');
        //console.log(array_auth[1]);
    
        //--decode Authorization key into String
        var string_basic_auth = array_auth[1];
        var data_string_auth = (new Buffer.alloc(string_basic_auth, 'base64')).toString();
        //console.log(data_string_auth);    
        
        var user_info = data_string_auth.split(':');
        if(user_info[0] == 'machchitai' && user_info[1] == '123123'){
            //console.log(user_info);
            next();
        }
        else {
            res.status(401);
            res.json({
                'error':true,
                'error_mess': 'You dont\'t have permission'
            });
        }
    
    }
} 




