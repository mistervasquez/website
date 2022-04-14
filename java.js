
//Make the DIV element draggagle:


function dragElement(elmnt) {
  var xint = 0, yint = 0,  xmov= 0, ymov = 0;
  elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    // get the mouse cursor position at startup:
    xint = e.clientX;
    yint = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // calculate the new cursor position:
    xmov = xint - e.clientX;
    ymov = yint - e.clientY;
    xint = e.clientX;
    yint = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - ymov) + "px";
    elmnt.style.left = (elmnt.offsetLeft - xmov) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function loadXMLDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "color.txt", true);
  xhttp.send();
}