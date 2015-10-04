 
   var uppgift4 = document.getElementById("uppgift4");
    uppgift4.onclick = function() {
        var text=prompt("Skriv in en text här");
        var tLength= text.length; 
        var lowText=text.toLowerCase();
        var output = []
       string(lowText);
       function string(lowText){
        
       
        for (var i=0; i<tLength;i++){
             
             if (lowText[i] === "a") {
                        output[i] = '#';
                }else{
                        output[i]=lowText[i];
                }
      
           
        }
        var t=" ";
        t+=output;
        
    var f =t.replace(/[,]/g , ''); 
      alert(f);
       }
        
    };