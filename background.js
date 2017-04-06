const baseURL = 'http://localhost:3000/api/v1/contents';

function sendhighlighted(highlightObject) {
  console.log('>>>>>>>>>>>>>>>>');
  console.log(highlightObject);
  console.log('>>>>>>>>>>>>>>>>');
  return fetch(`${baseURL}`, {
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
        body: JSON.stringify(highlightObject)
      })
    .then((r) => r.json())
    .catch(console.error)
}


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({selected: false, url: 'chrome-extension://ebncgjddlchicgnjcpahachcackiokfj/indexTab.html'}, function(newtab){
    // just check that i can access the current tabid
    console.log(tab.id)
    // send a message to the content script that gets highlighted text
    // set loading icon here
    chrome.tabs.sendMessage(tab.id, {todo: "Give me something"}, function(highlighted){
      console.log(highlighted);
      return sendhighlighted({highlighted: highlighted})
          .then((response) => {
            // reset to normal icon here
            console.log(response)
            chrome.tabs.sendMessage(newtab.id, response, function(reply){
            })
        })
      })
    })
    // The most essential line of them all v
    return true
  })

  // })
