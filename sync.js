/*ECMA script 문법에서 비동기를 동기로 처리하려면
async 모듈을 이용할 수 있다 */

var async = require("async");

async.waterfall([test1, test2], function(err, result){
    if(err){

    }else{
        console.log("모든 함수 처리 종료..");
    }
});

function test1(callback){
    console.log("test1 호출");
    callback();
}

function test2(callback){
    console.log("test2 호출");
    callback();
}