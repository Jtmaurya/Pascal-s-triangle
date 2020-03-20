/*
         Function that takes number of rows as input. 
         Output is a 2D array with the values.
        */
        function getPascalTriangle(n){
            //2D array
            var arr = [];
            var tmp;
            for(var i=0;i<n;i++){
                //Each element in array is in turn an array
                // The index is the row number and the array values are the row values
                arr[i]=[];
                for(var j=0; j<=i; j++){
                    //If index is last element the value is always 1
                    if(j==i){
                        arr[i].push(1);
                    }else{
                        //The following line adds up the two numbers directly above this element.
                        tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
                        arr[i].push(tmp);
                    }
                }
            }
            return arr;
        }
        var fs = require("fs");
    fs.readFile('index.html','utf8',function(err,n){
        out = getPascalTriangle(n)
       fs.writeFile('index.html',out);
        for (var i = 0;i<n;i++){
         console.log(out[i]);
         
         
        };
        
   });