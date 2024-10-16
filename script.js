document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Collect the form data
    const textInput = document.getElementById('textInput').value;
    const imageInput = document.getElementById('imageInput').files[0];
    const audioInput = document.getElementById('audioInput').files[0];
    const videoLength = document.getElementById('videoLength').value;
    const videoStyle = document.getElementById('videoStyle').value;
  
    // Log the form data to the console (replace with API call)
    console.log({
      textInput,
      imageInput,
      audioInput,
      videoLength,
      videoStyle
    });
  
    alert('Video generation started! Check console for details.');
  });
  