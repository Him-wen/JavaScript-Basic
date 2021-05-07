// 传递参数对象,实现参数格式
function formaParams ( params ){
    return '?' + Object.keys(params).map((key)=>{
        return key + '=' + params[key]
    }).join('&')
}
var obj = {
    name:'1',
    age:'2',
}
console.log( formaParams(obj) );


