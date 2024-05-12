var onload = function(){
  console.log(`module window loaded `);
}
export function fun() {
  console.log(`Hello, module`);
  window.addEventListener( "load", onload, false );
}
export obj = {
  a=1,
  b=2
}
fun();