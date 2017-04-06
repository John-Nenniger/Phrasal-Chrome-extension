const baseURL = 'http://localhost:3000/api/v1/contents';

function sendhighlighted(highlightObject) {
  console.log(highlightObject);
  return fetch(`${baseURL}`, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: 'POST',
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
      // should be an object with phrase: "the highlighted text here"
      console.log(highlighted);
      return sendhighlighted({highlighted: highlighted})
          .then((response) => {
            console.log(response)
            chrome.tabs.sendMessage(newtab.id, {response, highlighted}, function(reply){
            })
        })
      })
    })
    // The most essential line of them all.
    // This makes the the create tab function asynchronous,
    //  so that the page populates properly
    return true
  })
