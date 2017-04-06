$('document').ready(function(){


  chrome.runtime.onMessage.addListener(function(request, response, sendResponse) {
    console.log(request)
    console.log(response)
    console.log(sendResponse)
    for (let matchnum = 0; matchnum<request.length; matchnum++){
      console.log(request[matchnum].sentence)
      let div = document.createElement("div");
      let sentence = document.createTextNode(request[matchnum].sentence)
      div.appendChild(sentence);
      document.getElementById("index").appendChild(div);
    }
    sendResponse({hello: "world"})
  })

})

console.log("this is outside of the request")
