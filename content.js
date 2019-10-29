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
    document.body.innerHTML = document.body.innerHTML.replace(/\I\’\ll/g, "Rickey Henderson will");
    document.body.style.setProperty = ("color", "goldenrod", "important");

    colorLinks("#00FF00");
// Changes the color of the links
    function colorLinks(hex)
      {
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                links[i].style.color = hex;  
            }
        }  
      };
// end function

// color text of Div elements
    colorTextDivs();

    function colorTextDivs(){
      var divs = document.getElementsByTagName("div");
      for(var i=0; i < divs.length; i++)
      {
        divs[i].style.setProperty("color", "goldenrod", "important")
      }
    }

// color text of Span elements 
    colorTextSpans();

    function colorTextSpans(){
      var spans = document.getElementsByTagName("span");
      for(var i=0; i < spans.length; i++)
      {
        spans[i].style.setProperty("color", "goldenrod", "important")
      }
    }



    function colorParas(){
      var paras = document.getElementsByTagName("p");
      for(var i=0; i < paras.length; i++)
      {
        paras[i].style.setProperty("color", "goldenrod", "important")
      }
    }
    colorParas();
    }
  }
); 
