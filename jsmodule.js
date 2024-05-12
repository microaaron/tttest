var onload = function(){
  console.log(`module window loaded `);
}
export function fun() {
  console.log(`Hello, module`);
  window.addEventListener( "load", onload, false );
}
fun();