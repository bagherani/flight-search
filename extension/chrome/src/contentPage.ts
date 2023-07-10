chrome.runtime.onMessage.addListener(function (message) {
  console.log("command is:", message, document.location.toString());
});

document.addEventListener("DOMContentLoaded", function () {});
