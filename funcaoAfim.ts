function afim(a:number,b:number,x:number):number{
  if(x !==0){ return a*x+b}
  
  else{throw new Error("a deve ser diferente de zero para uma função quadrática válida");}


}
console.log(afim(3,2,7))