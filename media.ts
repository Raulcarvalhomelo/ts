const media=(...args:number[]):number=>Math.round(args.reduce((a,b)=>a+b)/args.length)

console.log(media(5,5,6))