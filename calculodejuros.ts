type jurosType="simples"|"composto"

interface Juros{
  c:number;
  i:number;
  t:number;
}
function calculoJuros({c,i,t}:Juros, type:jurosType):number{
   return type==="simples"?c*i*t:c*Math.pow(1+i,t)
   
}

console.log(calculoJuros({c:2,i:3,t:4},"simples"))
