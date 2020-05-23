window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];
  let isRecording = false; //used to determine if it should be recorded
  var storedBeats = []; //array for storing every beat added by adding in index
  const record = document.getElementById("record");
  const play = document.getElementById("play");
  const clear = document.getElementById("restart");

  //Operation for record button
  record.addEventListener("click", () => {
      if(isRecording == false){
        isRecording = true;
        document.getElementById("play").disabled = true;
        document.getElementById("restart").disabled = true;
        document.getElementsByClassName("record")[0].src = './icons/record.svg';
        play.style.background = '#439468';
        clear.style.background = '#798a52';
        play.style.cursor = 'default';
        clear.style.cursor = 'default';
      } else {
        isRecording = false;
        document.getElementById("play").disabled = false;
        document.getElementById("restart").disabled = false;
        document.getElementsByClassName("record")[0].src = './icons/microphone.svg';
        play.style.background = '#60d394';
        clear.style.background = '#c1db84';
        play.style.cursor = 'pointer';
        clear.style.cursor = 'pointer';
      }
  });

  //Operation for play button
  play.addEventListener("click", () => {
      //When clicked, play each sound that is stored
      for(var i = 0; i < storedBeats.length; i++){
        sounds[storedBeats[i]].currentTime = 0;
        sounds[storedBeats[i]].play();
        createBubble(storedBeats[i]);
      }
  });

  //Operation for clear button
    clear.addEventListener("click", () => {
      storedBeats = [];
    });

  //What happens when you click on each pad
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      if(isRecording = true){
        storedBeats.push(index);
      }
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  //Creates the bubble for each pad
  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };

});
