/*
Description:
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

*/


//Solutions
//Mine
const logs = (x , a, b) => Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);


//Top
function logs(x , a, b){
  return (Math.log(a*b) / Math.log(x));
}
