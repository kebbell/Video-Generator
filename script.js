document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Collect the form data
    const textInput = document.getElementById('textInput').value;
    const imageInput = document.getElementById('imageInput').files[0];
    const audioInput = document.getElementById('audioInput').files[0];
    const videoLength = document.getElementById('videoLength').value;
    const videoStyle = document.getElementById('videoStyle').value;
  
    // Log form data for debugging
    console.log({
      textInput,
      imageInput,
      audioInput,
      videoLength,
      videoStyle
    });
  
    // Example structure for API call (replace with actual API logic)
    const formData = new FormData();
    formData.append('text', textInput);
    formData.append('image', imageInput);
    formData.append('audio', audioInput);
    formData.append('videoLength', videoLength);
    formData.append('videoStyle', videoStyle);
  
    // Replace with actual API endpoint
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
  