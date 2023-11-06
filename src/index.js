module.exports = function check(str, bracketsConfig) {
  let isCheck;
  // console.log(bracketsConfig.length);
   let Stack = [];
   if (!str) {
     return;
   }
 
   else {
   Stack.push(str[0]);
   
   for (let i = 1; i < str.length; i++) {
  //   console.log(str[i]);
     Stack.push(str[i]);
     bracketsConfig.forEach(element => {
       if (str[i] == element[1] && Stack[Stack.length-2] == element[0]) {
         Stack.pop();
         Stack.pop();
       }
     });
 
   }
 } 
 
 Stack.length > 0 ? isCheck = false : isCheck = true;
 //console.log(isCheck);
 return isCheck;
}
