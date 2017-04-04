console.log('I\'m inside getHighlighted');

//
// document.body.style.backgroundColor = 'blue'
function getSelectionText() {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}


chrome.runtime.onMessage.addListener(function(request, response, sendResponse){
  let highlighted = getSelectionText();
    sendResponse({phrase: highlighted});
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log(request);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%');
})

// chrome.runtime.sendMessage({please: "work"});
