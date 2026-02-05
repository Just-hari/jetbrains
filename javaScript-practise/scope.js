 const a = 1; const b = 2; const c = 3;

     (function firstFunction (x) {
       const b = 5; const c = 6;

       (function secondFunction (y) {
         const b = 8;
         console.log(`a: ${a}, b: ${b}, c: ${c}`);

         (function thirdFunction (z) {
           const a = 7; const c = 9;

           (function fourthFunction (p) {
             const a = 1; const c = 8;
           })()
         })()
       })()
     })()
     
     //a: 1, b: 8, c: 6