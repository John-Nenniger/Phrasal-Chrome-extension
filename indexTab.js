const baseURL = 'http://localhost:3000/api/v1/contents';


function Q (query) { return document.querySelector(query) }
function Qs (query) { return document.querySelectorAll(query) }

function sendhighlighted(highlighted) {
  fetch(`${baseURL}` + highlighted)
  .then((r) => r.json())
}

chrome.browserAction.onClicked.addListener(function(tab) {
// just check that i can access the current tabid
console.log(tab.id)
// send a message to the content script that gets highlighted text
// set loading icon here
chrome.tabs.sendMessage(tab.id, {todo: "Give me something"}, function(highlighted){
  console.log(highlighted);
  return sendhighlighted(highlighted).then((response) => {
    // reset to normal icon here
    
    chrome.tabs.create({selected: false, url: 'chrome-extension://ebncgjddlchicgnjcpahachcackiokfj/indexTab.html'})

  })

  })

});
