console.log("hola")

let IMEI_REPORTED_STOLEN=["54214","123456789","87654321"];
localStorage.setItem("celReport",JSON.stringify(IMEI_REPORTED_STOLEN))
const GundamStore = function () { 
    login = JSON.parse(sessionStorage.getItem("login"));
    if (login == null) {
        window.location.replace("/login.html");
    }
    objLocalGundams = localStorage.getItem("gundams");
    if (objLocalGundams != null) {
        arrGundams = JSON.parse(objLocalGundams);
    }
   // $table.bootstrapTable();
   // $table.bootstrapTable('load', arrGundams);
  //  modificarCSS();
}();