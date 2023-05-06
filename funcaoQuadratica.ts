function quadratica(a:number,b:number,c:number,x:number):number {
  if (a!==0){
    return a*x**2+b*x+c
  }
  else{throw new Error("a deve ser diferente de zero para uma função quadrática válida");
}
}

console.log(quadratica(2,3,1,4))