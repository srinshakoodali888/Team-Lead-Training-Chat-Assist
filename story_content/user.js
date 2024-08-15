function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lFV854xbpu":
        Script1();
        break;
      case "6TXQbwnlsbD":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var userScore = player.GetVar("userScore");
var totalScore = 10;
var userPercentage = (userScore / totalScore) * 100;
player.SetVar("userPercentage", userPercentage);
}

function Script2()
{
  var player = GetPlayer();
var resultStatus = player.GetVar("resultStatus");

function findAPI(win) {
    while ((win.API == null) && (win.parent != null) && (win.parent != win)) {
        win = win.parent;
    }
    return win.API;
}

function setScormStatus(status) {
    var scormAPI = findAPI(window) || findAPI(window.parent);
    if (scormAPI) {
        scormAPI.LMSSetValue("cmi.core.lesson_status", status);
        scormAPI.LMSCommit("");
    }
}

if (resultStatus === "Passed") {
    setScormStatus("passed");
} else if (resultStatus === "Failed") {
    setScormStatus("failed");
}
}

