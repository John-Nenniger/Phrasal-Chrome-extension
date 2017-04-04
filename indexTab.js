const baseURL = 'http://localhost:3000/api/v1/contents';


function Q (query) { return document.querySelector(query) }
function Qs (query) { return document.querySelectorAll(query) }

function sendhighlighted(highlighted) {
  fetch(`${baseURL}`)
  .then((response) => response.json())
  .then(console.log(response))
}




//
// let highlighted = getSelectionText()
// let response = ""
// let array = [highlighted, response]
// console.log(highlighted)
// return array
// var highlighted;
//

///////////////////////////////////////////////////////////////this is a disaster lets try again with getViews


//  function findHighlightedTextinTab (tabId, cb) {
//
//     let phrase = chrome.tabs.executeScript(tabId, {code:
//       `function getSelectionText() {
//         let text = "";
//         if (window.getSelection) {
//           text = window.getSelection().toString();
//         } else if (document.selection && document.selection.type != "Control") {
//           text = document.selection.createRange().text;
//         }
//         return text;
//       }
//       let highlighted = getSelectionText()
//       console.log(highlighted)
//       return highlighted;`
//     }, console.log)
//
//   }


// function findHighlightedTextinTab (tabId) {
//   return new Promise(function(resolve, reject){
//     let highlighted = getSelectionText()
//     console.log(highlighted)
//   })

  // let phrase = chrome.tabs.executeScript(tabId, {
  //   cb(highlighted);
  //
  // })



chrome.browserAction.onClicked.addListener(function() {
  let views = chrome.extension.send()
  console.log(views)
  // generate the new tab with the base HTML
  chrome.tabs.create({selected: false, url: 'chrome-extension://ebncgjddlchicgnjcpahachcackiokfj/indexTab.html'})
  views = chrome.extension.getViews({type: 'tab'})
  console.log(views)
});
// get the newly created tab
  // chrome.tabs.query({title: 'phrasal'})
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
