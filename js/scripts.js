
$(document).ready(onClick);
function onClick(){
    var holdQuote;
    var holdAuthor;
	$("#generateQuote").on("click",start);
    $("#tweet").on("click",tweet);
}

function start(){
   
	$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",function(json){

		holdQuote = json.quoteText;
		holdAuthor = json.quoteAuthor;
        
        if(holdAuthor === ""){
            holdAuthor = "Unknown";
        }
		$("#showQuote").text(holdQuote);
        $("#showAuthor").text("~ "+holdAuthor);
	});
}

function tweet(){
window.open("https://twitter.com/intent/tweet?text=" + holdQuote + " -" + holdAuthor);
}

/*function randomColor(){
    var color ="#";
    // Hex Code values for ROYGBIV
    var hexValues = ["FF0000","FF7FF0","FFFF00","00FF00","0000FF","4B0082","9400D3"];
    color += hexValues[Math.floor(Math.random()*hexValues.length)];
    console.log(color);
    document.getElementById('background').style.background = color;
}
*/
