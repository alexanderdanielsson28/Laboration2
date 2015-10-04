 var uppgift8=document.getElementById("uppgift8");
 
 
 uppgift8.onclick=function date(){
    var month=prompt("Vilken månad fyller du år på 1-12");
    var day=prompt("Vilken dag fyller du 1-12");
    
    var myday=parseInt(day,10);
    var  mymonth=parseInt(month,10);
    var _myMonth=mymonth-1;
    var roundDay=(Math.round(myday)+1);
    var roundMonth=Math.round(_myMonth);
    var nowYear=new Date().getFullYear();
    
    var ms=86400000;
    var nextBirthday= new Date(nowYear,roundMonth,roundDay);
    
    var nowTime=new Date();
   // console.log(nowTime);
     
    
    
        
      var diffInMs = (nextBirthday - nowTime);
     
      //om födelsedagen redan varit  
     console.log(diffInMs);
     

     if(diffInMs>0){
         
     
      var seconds = diffInMs / 1000;                
	    var minutes = seconds / 60;
	    var hours = minutes / 60;
	    var days = Math.floor((hours) / 24);  
            if(days==0){
              console.log("Grattis det är din födelsedag idag");
                
            }else{
             console.log(" Det är " + days + " dagar kvar till din födelsedag");
            }
        }
 
                                /*om fördelsedagen ej inträffat på detta år */
       else if (diffInMs < 0)                             
    	    {                                               
    	        var nextbirthdate = new Date(nowYear+1, roundMonth, roundDay); // Nästa födelsedag 
    	      //  console.log(nextbirthdate);
    	        var nextbirthinmilli = nextbirthdate.getTime();  
    	        
    	        var newdifference = nextbirthinmilli - nowTime;  
    	        
    	        var dseconds = newdifference / 1000;            
    	        var dminutes = dseconds / 60;
    	        var dhours = dminutes / 60;
    	        var ddays = dhours / 24;                    // Få denna skillnad uttryckt i dagar
                
                    if (ddays % 1 !=0)          
                    {
                        ddays = ddays - (ddays % 1)
                    
                    }    
                
                console.log(" Det är " + ddays + " dagar kvar till din födelsedag");	                            // Returnera detta antal dagar.
    	    }


	};
 

 