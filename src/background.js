chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "logText") {
      console.log("Extracted Text from " + sender.tab.url + ":", request.text);
    }
  });