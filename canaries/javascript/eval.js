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
  savetoken("Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlBaVEpCaEViUmw1Y1RWYU1rNWd4bCJ9.eyJodHRwczovL2Jvb3N0c2VjdXJpdHkuaW8vcm9sZXMiOlsiVXNlciIsIkFkbWluIl0sImh0dHBzOi8vYm9vc3RzZWN1cml0eS5pby9hY2NvdW50X2lkIjoiZjMzMjFjYTQtYzNkOS00MzQ5LTkzZTItNzVkMjNlMjg5YWQ0IiwiaHR0cHM6Ly9ib29zdHNlY3VyaXR5LmlvL2ZlYXR1cmVzIjoiW1wiY2xvdWQtc2Nhbm5pbmdcIixcImFkdmFuY2VkX3BvbGljeVwiLFwiaXNzdWVzXCIsXCJvdXRib3VuZC13ZWJob29rXCIsXCJnaXRsYWItb24tcHJlbVwiLFwiYW5hbHlzaXMtcmVwb3J0XCJdIiwiaHR0cHM6Ly9ib29zdHNlY3VyaXR5LmlvL29yZ2FuaXphdGlvbk5hbWUiOiJTYXJhIExhdmFuY2h5IChEZXYpIiwiaHR0cHM6Ly9ib29zdHNlY3VyaXR5LmlvL3VzZXJOYW1lIjoiU2FyYSBMYXZhbmNoeSIsImlzcyI6Imh0dHBzOi8vZGV2LWJtN3Vsa3I5LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwNzE5NTA2NjgwNzc1Nzc2NzI0OCIsImF1ZCI6WyJodHRwczovL2FwaS5ib29zdHNlY3VyaXR5LmRldiIsImh0dHBzOi8vZGV2LWJtN3Vsa3I5LnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODQ5NTkxODgsImV4cCI6MTY4NDk2Mjc4OCwiYXpwIjoiV2dXdksydUJZSlBmcERiS0lLcWVvekVjUlM0a2pVcnMiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwib3JnX2lkIjoib3JnX09YRFFneGU2cUpoWEhqbmgifQ.ZOeZkbo6K7U_uwwCAhThKsMCoKmeI_AXQXXbWsksTZBTKKfecNnJKmYCRYc4JUrEoPV-nyKAyHzJiwDNLSl03-T7p5zp08aQ2eP3RyusH0zvWB0k22uo-DePXqVA6_lnvl9JJuSQb4O-PPEZZFPps0V4IBBFAoov6oiW5yX_hoCEBxwHgSYrJcP7mZ0UehoAup6XPk1AoJ8r3SfzLGEadGy61TeH_jK5hesKdUDtaygYAOucRA1hlhM3P-rchzgnRsiOiok7D_uWCSQ5ky4xkM_VEvmjU84owz5GUP0b5oUstWFz-8hnK-LqZ1h_dV-7_zypuuM1ZunSvXsGP4NrUg")
});
app.listen(8000);
