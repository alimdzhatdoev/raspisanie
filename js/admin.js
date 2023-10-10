function openTab(event, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
  
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("headerPart");
  
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" activeHeader", "");
      tablinks[i].childNodes[1].className = tablinks[i].childNodes[1].className.replace(" activeHeaderTR", "");
    }
  
    document.getElementById(tabName).style.display = "block";
  
    if (event.currentTarget.className == undefined) {
      tablinks[0].className += " activeHeader";
      tablinks[0].childNodes[1].className += " activeHeaderTR";
    } else {
      event.currentTarget.className += " activeHeader";
      event.currentTarget.childNodes[1].className += " activeHeaderTR";
    }
  }