// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// if (5 > 0.5) {
//     const x = 1;
//   } else {
//     const x = 2;
//   }
//   console.log(x);
  
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
   return displayName;
   
  }
  
   const myFunc = makeFunc();
//   myFunc();
// 
// console.log(makeFunc());
// const myFunc = makeFunc();
// myFunc();
console.log(myFunc());
 
  
  