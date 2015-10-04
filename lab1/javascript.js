





/*
//uppgift 1 
console.log("hello world");

// Moment II
 alert("rad1" +"\n" +"rad 2");



//Uppgift 2 – Funktioner

//Moment 1
*/
 function average(){
    var total=2+6+4+2;
    var sum=total/4;
    
    return sum;
}



/*
//Moment 2
var name= "alexander";
var surname="Danielsson";
function inpar(name,surname){
    console.log("Hej mitt namn är " + name + " och mitt efternamn är " + surname);
}

inpar(name,surname);


*/
//Uppgift 3 – Gissa talet

//Moment I  ”Gissa talet”

function play(){

    var secret = Math.floor(Math.random() * 100)+1; 
	var index=0;

	var guess = function(number){
		console.log("Det hemliga talet: " + secret); 
		console.log("Du gissade: " + number); 
	
	number = parseInt(number);
	
		
	if (number < 0 || number > 100) {
		    return[ false,"talet "+number+" är utanför intervallet 0-100"];
		    
		    
		}
			
	if (secret < number) {
		     index++;
		    return[false, "Hemliga talet är mindre"];
		   
		    
		}
    
    if (secret > number) {
		    index++;
		    return[false, " Hemliga talet är större"];
		    
		    }
    
    if (isNaN(number)) {
		      return[false, "måste ange ett tal mellan 1-100"];  
		    }
	if (number == secret) {
	    
	    console.log("Grattis");
	    index++;
	    return[true,"grattis du vann!Det hemliga talet var "+secret+" och du behövde "+index+" gissningar för att hitta det."];
	}	    

		
		
	};
	    


	





	var p = document.querySelector("#value"); 
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");


	submit.addEventListener("click", function(e){
		e.preventDefault(); 

		var answer = guess(input.value); 
		p.innerHTML = answer[1];	

		if(answer[0] === true){			
			submit.disabled = true;
		}
	
	});
};

   function convertF(f){	//to celcius
       
       var celcius=(f  -  32)*  5/9;
       var roundedC = Math.round( celcius * 10 ) / 10;
       alert(roundedC+"\u00B0c");
       
   }
   function convertC(c){		// to farenheit
	   var Fahrenheit=(c * 9/5 + (32)); 
       var roundedF = Math.round( Fahrenheit * 10 ) / 10;
       alert(roundedF+"\u00B0c");      
   }
   
  
    
