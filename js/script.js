
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