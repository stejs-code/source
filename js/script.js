
//Color changer
function changeColor(color, id){
	document.getElementById(id).style.color = color;
}

//Show and hide
function hideAndSeek() {
    document.getElementById("hideandseek").classList.toggle("hidden");
}

var no = 0;
//break button
function breakButton() {
    no++;
    if (no == 5){
        document.getElementById("breakbutt").disabled = true;
        document.getElementById("breakbutt").innerHTML = "Broken"
    }
    
    document.getElementById("breakText").innerHTML = "If you 5x press this button, the button will break (" + no + ")";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



function buttonChange(id){
    var value = getCookie("button-" + id)
    if (value == "true") {
        document.cookie = "button-" + id + "=false";
        console.log("changed to false – " + "button-" + id)
    } else {
        document.cookie = "button-" + id + "=true";
        console.log("changed to true")
    }
}
function buttonCheck(id){
    console.log("divnej pokus")
    var value = getCookie("button-" + id)
    if (value == "true"){
        document.getElementById(id).checked = true;;
        console.log("loadnuto voe")
    }
}
window.onload = buttonCheck('switcher');