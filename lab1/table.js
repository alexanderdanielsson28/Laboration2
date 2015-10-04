



var uppgift9=document.getElementById("uppgift9");
uppgift9.onclick = function table() {
    createTable([
 ["Förnamn:",
 "Efternamn:",
 "Telefon:",],
 ["Haris",
 "Kljajic",
 "7716",],
["Mats",
 "Loock",
 "7718"],
 ["Alex",
 "danielsson",
 "7714"],
 ["id",
 "olss..",
 "7713"]

]);
    
};


function createTable(input){
    var table= document.getElementById("table");

    
    var tbOut = "<table border='1' cellpadding='3'>\n";
    var rows = input.length;
    
     for (var i = 0; i < rows; i++) {
        if(i % 2 === 0){
        tbOut += "<tr>\n";
        }
        else{
            tbOut += "<tr BGcolor=grey>\n";
        }
        var cell = input[i];
        for (var e = 0; e < cell.length; e++) {
            if(i === 0){
                tbOut +=  ("<th>" + cell[e] + "</th>\n");
            }
            else{
            tbOut +=  ("<td>" + cell[e] + "</td>\n");
    
            }
        
            
        }
    tbOut += "</tr>\n";
    }
     tbOut += "</table>";
    table.insertAdjacentHTML("afterbegin", tbOut);
    console.log(tbOut);
}