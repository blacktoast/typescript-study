// Import stylesheets
//import './style.css';

// Write TypeScript code!
function a(f: (a: any, b: any) => any //import './style.css';
){
  return f;
}

let add=(a: any,b: any)=>a+b;

let a2=a(add);
console.log(a2(2,4))