const baseURL = 'http://localhost:3000/api/v1/contents';

function Q (query) { return document.querySelector(query) }
function Qs (query) { return document.querySelectorAll(query) }

function sendhighlighted(highlighted) {
  fetch(`${baseURL}`, {
        // to make a json request with fetch
        // you have to specify that information the hearders
        // - the Accept header tells the server what kind of data
        // we expect in return
        // - the Content-Type header tells the server what kind of data
        // we are sending it
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        // JSON.stringify transforms a JavaScript into a JSON formatted
        // string of text
        body: JSON.stringify({highlighted})
      })
    .then((r) => r.json())
    .catch(console.error)
}


chrome.browserAction.onClicked.addListener(function(tab) {
// just check that i can access the current tabid
console.log(tab.id)
// send a message to the content script that gets highlighted text
// set loading icon here
chrome.tabs.sendMessage(tab.id, {todo: "Give me something"}, function(highlighted){
  console.log(highlighted);
  return sendhighlighted(highlighted)
          .then((response) => {response.json})
    // reset to normal icon here
    chrome.tabs.create({selected: false, url: 'chrome-extension://ebncgjddlchicgnjcpahachcackiokfj/indexTab.html'}, function(tab){
      // so i can inject script into the page i just fucking made because I don't have permission what the fuck
      // so instead I have to send the Json to indexTab.js which will then affect the DOM. This is actually not that bad

      chrome.tabs.sendMessage(tab.id, highlighted, function(response){
        // I shouldn't get a response back because indexTab.js should just finish creating the new tab for me
        console.log(response)
        })
      })
    })
    //
  })

  })
