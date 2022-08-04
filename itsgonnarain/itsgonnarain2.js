
// this is an interesting checkingpoint
// it starts branching out https://teropa.info/blog/2016/07/28/javascript-systems-music.html
// from here when it reaches the part "Setting up The Second Loop"

console.log("It's gonna rain");


function go() {


    console.log("The button has been clicked");


    let audioContext = new AudioContext();

    fetch('audio-file-tf-intro-01.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      let sourceNode = audioContext.createBufferSource();
      sourceNode.buffer = audioBuffer;
      sourceNode.loop = true;
      sourceNode.loopStart = 2.98;
      sourceNode.loopEnd = 6.80;
      sourceNode.connect(audioContext.destination);
      sourceNode.start(3, 2.98);
      console.log('Decoded', audioBuffer);
    })
    .catch(e => console.error(e));


    
    

}
