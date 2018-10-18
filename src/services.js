function httpGet(url) {

  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function () {
      resolve(xhr.response);
    }
    xhr.onerror = function () {
      reject("error");
    }
    xhr.responseType = "json";
    xhr.send();
  });
}

function getPrettyDateToday(timestamp) {
  var date = new Date(timestamp * 1000);
  var options = {
    //era: 'long',
    //year: 'numeric',
    // month: 'long',
    // day: 'numeric',
    // weekday: 'long',
    //timezone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    //second: 'numeric'
  };
  return date.toLocaleString("en-US", options);
}

function getPrettyDateTomorrow(timestamp) {
  var date = new Date(timestamp * 1000);
  var options = {
    //era: 'long',
    //year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    //timezone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    //second: 'numeric'
  };
  return date.toLocaleString("en-US", options);
}

function getTempFromKToC(temp) {
  return (temp - 273).toFixed(1);
}

function getDirectionByDegree(windDeg) {
  var directions = ['North', 'North-West', 'West', 'South-West', 'South', 'South-East', 'East', 'North-East'];
  return directions[Math.round(((windDeg %= 360) < 0 ? windDeg + 360 : windDeg) / 45) % 8];
}

function renderMarkupTomorrow(pogoda) {
  // console.log(pogoda);
  let arrTomorrow = [];
  for (var i = 0; i < pogoda.length; i += 8) {
    arrTomorrow.push(pogoda[i]);
  }
  // console.log("arr", arrTomorrow);
  return arrTomorrow;
}

export {
  httpGet, getPrettyDateToday, getPrettyDateTomorrow, getTempFromKToC,
  getDirectionByDegree, renderMarkupTomorrow
}
