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
  let response = ""
  let array = [highlighted, response]
  // then it should use the response to generate the page below
  chrome.tabs.create({selected: false , url: chrome.extension.getURL('indexTab.html')})

  console.log(highlighted)
  return array
});

  chrome.tabs.query({active: true}, function() {
    let highlighted = getSelectionText();
    let response = "";
    let array = [highlighted, response];
    chrome.tabs.query({title: 'phrasel'}, function(){
      document.getElementById('phrase').text(highlighted)
      console.log(highlighted)
    })

  })



// chrome.tabs.onCreated.addListener(function() {
//   $(document.body).css("background-color", "darkseagreen")
//
// })
