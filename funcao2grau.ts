
function segundoGrau(a:number,b:number,c:number):[number,number]{

  if(a!==0){
    return [(-b-Math.sqrt(b**2-4*a*c))/(2*a),(-b+Math.sqrt(b**2-4*a*c))/(2*a)]
  }
  else{
    throw new Error('a deve ser diferente de zero para uma função quadrática válida')
  }
}

console.log(segundoGrau(2,5,3))

