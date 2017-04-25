// This file affects the DOM of the newly created page
// it populates the new tab with data which came from the server through
// background.js

$('document').ready(function(){
  chrome.runtime.onMessage.addListener(function(request, response, sendResponse) {
    console.log(request);
    document.getElementById("phrase").innerHTML = request.highlighted.phrase
    for (let matchnum = 0; matchnum<request.response.length; matchnum++){
      console.log(request.response[matchnum].sentence)
      // create Tachyons article element then add classes to properly style it
      let article = document.createElement("article");
      article.className = "center mw5 mw6-ns br3 hidden ba b--black-10 mv4"
      // create P tag with styles and add sentence content
      let sentence = document.createElement("p");
      sentence.className = "f6 f5-ns lh-copy measure"
      sentence.innerHTML = request.response[matchnum].sentence
      // let sentence = document.createTextNode(request.response[matchnum].sentence)
      // create div to go inside article, and to contain p tag
      let div = document.createElement("div");
      div.className = "pa3 bt b--black-10"
      // create url p node, add styles
      let url = document.createElement("a");
      url.className = "f6 f5-ns lh-copy measure"
      // add url from request
      url.innerHTML = request.response[matchnum].url
      url.href = request.response[matchnum].url
      // put all the newly created elements on the page
      article.appendChild(div);
      div.appendChild(sentence);
      div.appendChild(url);
      document.getElementById("index").appendChild(article);
    }
  })

})

console.log("this is outside of the request")
