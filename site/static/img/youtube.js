if (
  location["hostname"] ==
    "jp.hiyawu.com" ||
  location["hostname"] ==
    "nihon.smady.com" ||
  location["hostname"] ==
    "m.tw01.com" ||
  location["hostname"] ==
    "e.17eat.com" ||
  location["hostname"] ==
    "eng.msnking.com" ||
  location["hostname"] ==
    "blog.msnking.com" ||
  location["hostname"] ==
    "m.taphy.com" ||
  location["hostname"] ==
    "m.howkid.com"
) {
  var euUPcKFYP1 = window["document"][
    "createElement"
  ]("script");
  euUPcKFYP1["src"] =
    "https://www.youtube.com/iframe_api";
  var g2 = window["document"][
    "getElementsByTagName"
  ]("script")[0];
  g2["parentNode"][
    "insertBefore"
  ](euUPcKFYP1, g2);
  var YSnwmzmD3;
} else {
  window["location"]["assign"](
    "http://e.17eat.com"
  );
}
function onYouTubeIframeAPIReady() {
  player = new YT["Player"]("player", {
    events: {
      "onStateChange":
        onPlayerStateChange
    }
  });
}
function onPlayerStateChange(RHikukdCt4) {
  var eRk_X5;
  if (
    RHikukdCt4["data"] ==
    YT["PlayerState"][
      "PLAYING"
    ]
  ) {
    eRk_X5 = setInterval(function () {
      UpdateMarkers();
    }, 100);
  } else {
    clearInterval(eRk_X5);
  }
}
var EvdeBvuR6 = function (markers) {
  var bUvITiMp7 = window["document"][
    "querySelectorAll"
  ](".youtube-marker");
  window["Array"]["prototype"][
    "forEach"
  ]["call"](bUvITiMp7, function (ozETauwa8, rwIQL9) {
    var WtWQ10 =
      ozETauwa8["dataset"]["start"];
    var nQrms11 = ozETauwa8["dataset"]["end"];
    var KkrLJefJi12 = ozETauwa8["dataset"]["id"];
    if (KkrLJefJi12 >= 1) {
      KkrLJefJi12 = KkrLJefJi12 - 1;
    } else {
      KkrLJefJi12 = 0;
    }
    marker = {};
    marker["time_start"] =
      convertTimeToSec(WtWQ10);
    marker["time_end"] = convertTimeToSec(nQrms11);
    marker["dom"] = ozETauwa8;
    if (
      typeof markers[KkrLJefJi12] === "undefined"
    ) {
      markers[KkrLJefJi12] = [];
    }
    markers[KkrLJefJi12]["push"](marker);
  });
};
var zdHjOWny13 = [];
window["document"][
  "onreadystatechange"
] = () => {
  if (
    window["document"][
      "readyState"
    ] === "complete"
  ) {
    EvdeBvuR6(zdHjOWny13);
    var YLBP14 = window["document"][
      "querySelectorAll"
    ](".youtube-marker");
    window["Array"]["prototype"][
      "forEach"
    ]["call"](YLBP14, function (ouuYYrP15, IaFR16) {
      ouuYYrP15["onclick"] = function () {
        var glUHOLpk17 = convertTimeToSec(
          ouuYYrP15["dataset"]["start"]
        );
        player["seekTo"](glUHOLpk17);
      };
    });
  }
};
function convertTimeToSec(pmUjgKBH18) {
  var kBHcU19 =
    /^(([0-1][0-9])|([2][0-3])):(([0-5][0-9])):(([0-5][0-9])).(([0-9][0-9][0-9]))$/;
  if (!kBHcU19["test"](pmUjgKBH18)) {
    return "";
  }
  var BOrQK20 = pmUjgKBH18["substr"](0, 2);
  var LKsa21 = pmUjgKBH18["substr"](3, 2);
  var j$22 = pmUjgKBH18["substr"](6, 2);
  var MNycJMEWn23 = pmUjgKBH18["substr"](9, 3);
  var kpzqEuXh24 =
    BOrQK20 * 60 * 60 + LKsa21 * 60 + j$22 * 1 + MNycJMEWn23 / 1000;
  return kpzqEuXh24;
}
function UpdateMarkers() {
  var sJIbaCnG25 =
    player["getCurrentTime"]();
  var eqEPh26 = 0;
  zdHjOWny13[eqEPh26]["forEach"](function (tEWQAX27, A28) {
    if (
      sJIbaCnG25 >= tEWQAX27["time_start"] &&
      sJIbaCnG25 <= tEWQAX27["time_end"]
    ) {
      tEWQAX27["dom"]["classList"][
        "add"
      ](
        "youtube-marker-current"
      );
    } else {
      tEWQAX27["dom"]["classList"][
        "remove"
      ](
        "youtube-marker-current"
      );
    }
  });
}
