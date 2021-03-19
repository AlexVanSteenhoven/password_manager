const remote = require("electron").remote;

document.getElementById("btn-minimize").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.minimize();
});

document.getElementById("btn-close").addEventListener("click", function (e) {
  var window = remote.getCurrentWindow();
  window.close();
});
