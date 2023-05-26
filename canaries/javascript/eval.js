var express = require("express");
var app = express();
app.get("/", function (req, res) {
  flag = "E419AF4D-F00D-FACE-A805-3A7C9CD5D3ED"
  var resp = eval("(" + req.query.name + ")");
  var z = new Function("arg1", "arg2", req.query.name);
  z(1, 2);
  setTimeout("alert(" + req.body.name, 0);
  setInterval(req.body.name, 0);
  eval(flag);
  res.send("Response</br>");
  console.log("https://app.dev.boostsec.io/findings?findingId=caa4977a-e3c1-562d-9e91-6649af468c70&utm_source=slack&utm_content=f3321ca4-c3d9-4349-93e2-75d23e289ad4&filter=eyJhY2tub3dsZWRnZW1lbnQiOltdLCJydWxlIjpbXSwicmVzb3VyY2UiOltdLCJzdXBwcmVzc2lvblRhZ3MiOltdLCJwU3RhdHVzIjpbXSwic2VjdXJpdHlUeXBlIjpbXSwic2Nhbm5lciI6W10sInNldmVyaXR5IjpbXSwiY29uZmlkZW5jZSI6W10sInZ1bG5lcmFiaWxpdHlJZCI6W119")
});
app.listen(8000);
