var http = require('http');

function in_gia_tri(res, chuoi_data){
    if (chuoi_data){
        console.log(JSON.parse(chuoi_data).bien);
    }    
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.write('{"data":"hello world"}');
    res.end();
}

http.createServer(function (req, res) {
    var data = [];
    
    req.on('data',(chunk) =>{
        data.push(chunk);
    })

    req.on('end',() => {
        if(req.url == '/'){
            if(req.method == "POST"){
                in_gia_tri(res);
            }
            else if(req.method == "GET"){
                in_gia_tri(res, data.toString());
            }
        }
        else {

        }      
        // console.log(JSON.parse(data.toString()).bien);
        // res.writeHeader(200, {'Content-Type': 'application/json'});
        // res.write('{"data":"hello world"}');
        // res.end();
    })

}).listen(4000);
