    var uppgift6 =document.getElementById("uppgift6");
    
    uppgift6.onclick= function triangle(){
        var k1=prompt("Ange längden på kateter 1");
        var k2=prompt("Ange längden på kateter 2");
        
        
        var sideA=parseInt(k1, 10);
        var sideB=parseInt(k2,10);
        var _sideA=Math.pow(sideA,2);
        var _sideB=Math.pow(sideB,2);
        var k3=_sideA+_sideB;
        var sum = Math.floor((Math.sqrt(k3))); 
     
        
        alert(sum);
        
    };