document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const textInput = document.getElementById('textInput').value;
    const imageInput = document.getElementById('imageInput').files[0];
    const audioInput = document.getElementById('audioInput').files[0];
    const videoLength = document.getElementById('videoLength').value;
    const videoStyle = document.getElementById('videoStyle').value;
  
    console.log({
      textInput,
      imageInput,
      audioInput,
      videoLength,
      videoStyle
    });
  
    const formData = new FormData();
    formData.append('text', textInput);
    formData.append('image', imageInput);
    formData.append('audio', audioInput);
    formData.append('videoLength', videoLength);
    formData.append('videoStyle', videoStyle);
  
    const apiEndpoint = 'https://example-ai-video-api.com/generate';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Video generated:', data);
      alert('Your video has been generated successfully!');
    })
    .catch(error => {
      console.error('Error generating video:', error);
      alert('There was an error generating your video.');
    });
  });
  
  // Get the video element
  var video = document.getElementById("myVideo");
  
  // Get the button
  var btn = document.getElementById("myBtn");
  
  // Pause and play the video, and change the button text
  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }
  