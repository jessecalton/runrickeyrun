chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    document.body.style.backgroundColor = "green";
    document.body.innerHTML = document.body.innerHTML.replace(/\s[I]\s/g, " Rickey Henderson ");
    document.body.innerHTML = document.body.innerHTML.replace(/[I]\s/g, " Rickey Henderson ");
    document.body.innerHTML = document.body.innerHTML.replace(/\s\me\s/g, " Rickey Henderson ");
    document.body.innerHTML = document.body.innerHTML.replace(/\s\my\s/g, " Rickey Henderson's ");
    document.body.innerHTML = document.body.innerHTML.replace(/\My\s/g, "Rickey Henderson's ");
    document.body.innerHTML = document.body.innerHTML.replace(/\I\’\m/g, "Rickey Henderson's");
    document.body.style.color = "goldenrod";
    }
  }
); 
