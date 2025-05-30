// -------------------------------Make_HTML5----------------------------------
function Make_HTML5 () {
var Two_Lines = document.getElementById("Two_Lines")
var x1 = document.createElement("p");
x1_innerHTML =''
for (i = 0; i < videoSource.length; i++) {
    ref = '<a href = "javascript:Start_Music(' + i.toString() + ')">' 
    x1_innerHTML += ref + i.toString() + ":  " + videoTitle[i] + '</a><br />'  
    }
x1.innerHTML = x1_innerHTML 
Two_Lines.appendChild(x1);
};
Make_HTML5 ()

// ------------------------------ Start_Music(count0) -------------------------------------------------

function Start_Music(count0) {
   var count = count0;
   var sss = "------"
   var player=document.getElementById('myVideo');
   //console.log('videoSource[count] = ' + videoSource[count])
   player.setAttribute("src",videoSource[count]);
   //player.removeAttr("muted")
   player.load();
   player.play();
   player.addEventListener('ended',myHandler,false);
   document.getElementById("title").innerHTML = "Video " + count.toString() + "   " + videoTitle[count]
   
   function myHandler(e){
      if(!e) { e = window.event; }
      count++;
      while(videoTitle[count].includes(sss)){count++;}
      if (count == VideoNumber) {count = 0}
      player.setAttribute('src',videoSource[count])
      //player.removeAttr("muted")
      player.load();
      player.play();
      document.getElementById("title").innerHTML = "Video " + count.toString() + "   " + videoTitle[count]
    }
}  

Start_Music(0)
