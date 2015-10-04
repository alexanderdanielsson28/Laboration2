    var uppgift7=document.getElementById("uppgift7");
    
    
    
    
    uppgift7.onclick= function tentamen(){
        
        array_test([24, 6, 7, 9, 24]);
        
    };
        
        
        
        function array_test(testarray){
        
        
    
        var newarr=[];
        var sum=0;
        var result=0;
        var highest = Math.max.apply(undefined, testarray);
        var lowest = Math.min.apply(undefined, testarray);
       // var newArr = arr.slice(0);
        console.log("högsta värdet är: "+highest);
        console.log("lägsta värdet är: "+lowest);
        newarr.push(highest);
        newarr.push(lowest);
        
       
        
     
      /*  var largest = Math.max.apply(Math, s);
        console.log(largest);
        */
      
                    
         
        for (var i=0;i<testarray.length;i++){ /*Medelvädet*/
            
            sum += testarray[i] << 0;
            var total=sum/testarray.length;
            var round=Math.floor(total);
            
                //arr=answer.split(",");
        }
        newarr.push(round)
        console.log("medelvärdet är: "+round); 
       
         console.log(newarr);
         //var c=Math.max(w);
        // console.log(answer);
        /*       arr.sort(function(a, b) {
              return  a-b;
                var max_of_array = Math.max.apply(Math, s);
        });*/  
    //    console.log(arr);
    }
    