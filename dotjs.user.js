// ==UserScript==
// @name        dotjs
// @namespace   https://github.com/sj26/dotjs-fluid
// @description Run dotjs scripts via userscript for fluid apps
// @include     *
// @author      Samuel Cochran
// ==/UserScript==

(function () {
  function dotjs($) {
    $.ajax({
      url: 'http://localhost:3131/' + window.location.host.replace('www.','') + '.js',
      dataType: 'text',
      success: function(d){
        $(function(){ eval(d) })
      },
      error: function(){
        console.log('no dotjs server found at localhost:3131')
      }
    })
  }
  
  if (!jQuery) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status < 200 || this.status >= 300) {
          return console.log('no dotjs server found at localhost:3131, or missing jquery')
        }
        eval(xhr.responseText)
        jQuery.noConflict()(dotjs)
      }
    }
    xhr.open('GET', "http://localhost:3131/jquery.js");
    xhr.send();
  } else {
    jQuery(dotjs)
  }
})()
