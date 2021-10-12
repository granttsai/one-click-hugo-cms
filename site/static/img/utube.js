
if(location.hostname == "jp.hiyawu.com"||location.hostname == "nihon.smady.com"||location.hostname == "news.toshit.com"||location.hostname == "en.vmay.com"||location.hostname == "eng.msnking.com"||location.hostname == "blog.msnking.com"||location.hostname == "m.taphy.com"||location.hostname == "m.howkid.com"){

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

  
}
else{
window.location.assign("http://hiyawu.com");
  }

        
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onStateChange': onPlayerStateChange } });


}

function onPlayerStateChange(event) {
  var Update;
  if (event.data == YT.PlayerState.PLAYING) {
    Update = setInterval(function () {
      UpdateMarkers();
    }, 100);
  } else {
    clearInterval(Update);
  }
}

// Sample Markers on Page
var MarkersInit = function (markers) {
  
  var elements = document.querySelectorAll('.youtube-marker');
  Array.prototype.forEach.call(elements, function (el, i) {
    var time_start = el.dataset.start;
    var time_end = el.dataset.end;
    
    //alert(time_end);
    var id = el.dataset.id;;
    
    if (id >= 1) {
      id = id - 1;
    } else {
      id = 0;
    }
    marker = {};
    marker.time_start = convertTimeToSec(time_start);
    marker.time_end = convertTimeToSec(time_end);
    marker.dom = el;
    if (typeof markers[id] === 'undefined') {
      markers[id] = [];
    }
    
    markers[id].push(marker);
  });
};

// On Ready
var markers = [];

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    // Init Markers
    MarkersInit(markers);

    // Register On Click Event Handler
    var elements = document.querySelectorAll('.youtube-marker');
    Array.prototype.forEach.call(elements, function (el, i) {
      el.onclick = function () {
        // Get Data Attribute
        var pos = convertTimeToSec(el.dataset.start);
        // Seek
        player.seekTo(pos);
      };
    });

  } // Document Complete
}; // Document Ready State Change

function convertTimeToSec(c){var e=/^(([0-1][0-9])|([2][0-3])):(([0-5][0-9])):(([0-5][0-9])).(([0-9][0-9][0-9]))$/;if(!e.test(c)){return"";}var b=c.substr(0,2);var g=c.substr(3,2);var a=c.substr(6,2);var d=c.substr(9,3);var f=(b*60*60)+(g*60)+(a*1)+(d/1000);return f;}
        
function UpdateMarkers() {
  var current_time = player.getCurrentTime();
  //alert(current_time);
  var j = 0; // NOTE: to extend for several players
  markers[j].forEach(function (marker, i) {

    if (current_time >= marker.time_start && current_time <= marker.time_end) {
      marker.dom.classList.add("youtube-marker-current");
    } else {
      marker.dom.classList.remove("youtube-marker-current");
    }
  });
}
//# sourceURL=pen.js