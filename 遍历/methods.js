const list = [
    {name:'一导航',type:'nav',id:'1'},
    {name:'二导航',type:'content',id:'2'},
    {name:'三导航',type:'contnet',id:'3'},
    {name:'四导航',type:'nav',id:'4'},
] 

// const result = list.filter((item)=>{
//     console.log(item);
//     return item.type === 'nav'
// })

// const res = list.map((item)=>{
//     console.log(item);
//     return item.id === 'nav';
// })

Object.prototype.fun = () => {console.log('原型方法');}

const obj = {
    name:'james',
    id:2
}

console.log(Object.entries(obj));

for(const i in obj){
    console.log(i + ':' + obj[i]);
}
