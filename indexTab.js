$('document').ready(function(){


  chrome.runtime.onMessage.addListener(function(request, response, sendResponse) {
    console.log(request)
    console.log(request[0].article.url)
    for (let matchnum = 0; matchnum<request.length; matchnum++){
      console.log(request[matchnum].sentence)
      let div = document.createElement("div");
      let sentence = document.createTextNode(request[matchnum].sentence)
      div.appendChild(sentence);
      document.getElementById("index").appendChild(div);
    }
  })

})

console.log("this is outside of the request")
