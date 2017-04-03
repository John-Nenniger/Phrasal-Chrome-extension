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


//
// let highlighted = getSelectionText()
// let response = ""
// let array = [highlighted, response]
// console.log(highlighted)
// return array
//
chrome.browserAction.onClicked.addListener(function() {
  // query to get active tab id
  let getPrevTab = chrome.tabs.query({active: true}, function(tabs){
    console.log('Tab ID: ', tabs[0].id )
    let currentTabId = tabs[0].id
    return currentTabId
  });
  console.log(currentTabId)
  // get the highlighted text from the active tab
  let phrase = chrome.tabs.executeScript(getPrevTab, function(){
  let highlighted = getSelectionText()
  return highlighted;
  })
  console.log(phrase)
  // generate the new tab with the base HTML
  chrome.tabs.create({selected: false, url: 'chrome-extension://ebncgjddlchicgnjcpahachcackiokfj/indexTab.html'})
});
// get the newly created tab
  chrome.tabs.query({title: 'phrasal'})
  // add the highlighted text
  // and the query results

//
// chrome.tabs.query({title: 'phrasel'}, function(){
// })
//
// let phrase = document.getElementById('phrase')
// //  phrase.text = highlighted.toString
// console.log(array[0])



// chrome.tabs.onCreated.addListener(function() {
//   $(document.body).css("background-color", "darkseagreen")
//
// })
