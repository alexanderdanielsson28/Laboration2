	 	/*menu*/
	
		var userSelect=prompt("välj ett alternativ nedan"+"\n"+"0 Exit"+"\n"+
	                        "1 Fahrenheit to Celcius"+"\n"
                            + "2 Celcius to Fahrenheit"+"\n"+"3 Guess number");
       /*set input to disable*/
        document.getElementById("send").disabled=true;                    
        
        if(userSelect==="0"){
    
				
	    }
		else if(userSelect==="1"){
		    	var f=prompt("Fahrenheit?");
		     	convertF(f);
		     
			}
		else if(userSelect==="2"){
	     		var c=prompt("Celcius?");
	        	convertC(c);
		}	
		else if(userSelect==="3"){
				
			
				document.getElementById("send").disabled=false;
			
				play();
			
		}