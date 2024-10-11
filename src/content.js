function extractTextWithDelay() {
    // Wait for the page to be fully loaded
    if (document.readyState === 'complete') {
      var extractedText = document.body.innerText;
      
      setTimeout(function() {
        console.log("Extracted text after 10 seconds:");
        console.log(extractedText);
      }, 10000);
    } else {
      // If the page isn't fully loaded yet, wait a bit and try again
      setTimeout(extractTextWithDelay, 100);
    }
  }
  
  // Start the extraction process
  extractTextWithDelay();