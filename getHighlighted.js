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


// chrome.runtime.onMessage.addListener(function(request, response, sendResponse){
//   console.log("asdfasf", request)
//   if (request.from === 'indexTab' && request.subject === 'getData') {
//     console.log("here")
//     let highlighted = getSelectionText();
//     sendhighlighted(highlighted).then((response) => {
//       console.log("request", highlighted, "response", response)
//       sendResponse({matches: response});
//     })
//   }
//
// })

chrome.runtime.onMessage.addListener(function(request, response, sendResponse){
  let highlighted = getSelectionText();
  sendResponse({phrase: highlighted});
})
