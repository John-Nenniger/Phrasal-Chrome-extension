const baseURL = 'http://localhost:3000/api/v1/contents';


function Q (query) { return document.querySelector(query) }
function Qs (query) { return document.querySelectorAll(query) }

function sendhighlighted(highlighted) {
  fetch(`${baseURL}`)
  .then((response) => response.json())
  .then(console.log(response))
}

function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

chrome.browserAction.onClicked.addListener(function() {
  // first it should send a request to the server with the highlighted text
  let highlighted = getSelectionText()


  // then it should use the response to generate the page below
  chrome.tabs.create({selected: false ,url: chrome.extension.getURL('indexTab.html')})

  sendhighlighted(highlighted)
  console.log("Hey, whaddup?")

});
chrome.tabs.onCreated.addListener(function() {
  console.log("please work please")

})
