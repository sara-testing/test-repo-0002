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
  console.log("Bearer ewogICAibmFtZSI6ICIgc29tZSByYW5kb20gcGVyc29uIiwKICAgImFkZHJlc3MiOiIyMzQgUnVlIFBpY2hpbmNvbG8sIGl0YWx5IiwKICAgInVybCI6ICIiLAogICAicm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl0KfQ==")
});
app.listen(8000);
