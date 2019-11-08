const range = document.getElementById('range');
chrome.windows.getCurrent(w => console.log(w));
range.addEventListener('input', ({ target: { value } }) => {
  chrome.tabs.getSelected(null, function(tab) {
    // Send a request to the content script.
    chrome.tabs.sendRequest(tab.id, {action: "setReadLimit" , payload: value}, (response) => {
      console.log(response);
    });
  });
});
