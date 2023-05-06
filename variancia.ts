const variancia=(xi:number[]):number=> 
 (1/xi.length)*xi.map((num)=>(num-(xi.reduce((a,y)=>a+y)/xi.length))**2).reduce((x,y)=>x+y)

  

console.log(variancia([2,4,6,8,10]))