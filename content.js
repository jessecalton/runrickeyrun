chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    document.body.style.backgroundColor = "green";
    document.body.innerHTML = document.body.innerHTML.replace(/\s[I]\s/g, " Rickey Henderson ");
    document.body.style.color = "goldenrod";
    }
  }
); 
