// $('document').ready(function(){
//
//
//   chrome.runtime.onMessage.addListener(function(request, response, sendResponse) {
//     console.log(request)
//     console.log(response)
//     console.log(sendResponse)
    // for (let matchnum = 0; matchnum<request.length; matchnum++){
    //   console.log(request[matchnum].sentence)
    //   let div = document.createElement("div");
    //   let sentence = document.createTextNode(request[matchnum].sentence)
    //   div.appendChild(sentence);
    //   document.getElementById("index").appendChild(div);
    // }
//     sendResponse({hello: "world"})
//   })
//
// })

function setDOMData(data) {
  console.log("some data", data)
}

window.addEventListener("DOMContentLoaded", function() {
  chrome.extension.sendMessage({from: 'indexTab', subject: 'getData'}, function(data) {
    if (data) {
      const {matches} = data
      for (let matchnum = 0; matchnum < matches.length; matchnum++) {
        console.log(matches[matchnum].sentence)
        let div = document.createElement("div");
        div.className = "matchitem";
        let sentence = document.createTextNode(matches[matchnum].sentence)
        div.appendChild(sentence);
        document.getElementById("index").appendChild(div);
      }
    }
  })
})

console.log("this is outside of the request")
