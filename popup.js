document.getElementById('activate').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      // Fallback for MV2 or if chrome.scripting is not available
      if (chrome.scripting && chrome.scripting.executeScript) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          files: ['contentScript.js']
        });
      } else if (chrome.tabs.executeScript) {
        chrome.tabs.executeScript(tabs[0].id, {file: 'contentScript.js'});
      } else {
        console.error('No suitable method found to execute script.');
      }
    });
  });