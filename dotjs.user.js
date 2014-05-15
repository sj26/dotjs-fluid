// ==UserScript==
// @name        dotjs
// @namespace   https://github.com/sj26/dotjs-fluid
// @description Run dotjs scripts via userscript for fluid apps
// @include     *
// @author      Samuel Cochran
// @author      Corey Innis
// ==/UserScript==

(function () {
  function getScript(uri, callback) {
    var script = document.createElement("script");
    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;

    script.async = "async";
    script.src = uri;
    script.onload = function onload() {
      callback();
    };

    head.insertBefore(script, head.firstChild);
  }

  function dotjs($) {
    $.ajax({
      url: "http://localhost:3131/" + window.location.host.replace("www.","") + ".js",
      dataType: "text",
      success: function(d){
        $(function(){ eval(d); });
      },
      error: function(){
        console.log("no dotjs server found at localhost:3131");
      }
    })
  }

  if (!window.jQuery) {
    getScript("http://localhost:3131/jquery.js", function() {
      jQuery.noConflict();
      dotjs(jQuery);
    });
  } else {
    dotjs(jQuery);
  }
})();
