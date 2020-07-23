/*Node.js에서의 모듈이란? 메서드 집합을 의미 */
var mysql=require("mysql");
var async = require("async");
var fs=require("fs"); //FileSystem module
var ejs=require("ejs"); //외부모듈

const conStr={
    url:"localhost:3306",
    user:"root",
    password:"1234",
    database:"nodejs"
};

exports.getList=function(request, response){
    var client = mysql.createConnection(conStr);
    var sql = "select * from board";
    
    client.query(sql,function(error, result, fields){
        if(error){
            console.log(error);
            console.log(1);
        }else{
             //파일 읽어서 전송
            fs.readFile("list.ejs","utf8",function(err,data){
            response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            //그냥 데이터 자체를 보내면 문자열에 불과하므로,
            //읽어들인 데이터를 서버에서 해석해서 보내자
            //rendering 시켜야 한다.(ejs 모듈로 랜더링시켜야 함)
            response.end(ejs.render(data, {
                boardList:result
            }));
        });
        }
        client.end(function(err){
            console.log("connection closed");
        });
    });
    console.log(3);
    
}
exports.getDetail=function(){
    
}
exports.insert=function(){
    
}
exports.update=function(){
    
}
exports.del=function(){
    
}

exports.registForm=function(request, response){
    //파일을 읽어서 보내주기
    response.end("<html>");
}

