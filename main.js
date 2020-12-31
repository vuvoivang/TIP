document.getElementById("btnTinhTienTip").addEventListener("click", function () {
    var total = document.getElementById("txtTongTien").value;
    var percentTip = document.getElementById("slPhanTramTip").value;
    var amount = document.getElementById("txtSoNguoi").value;
    var tipForEveryone = total * percentTip / amount;
    document.getElementById("txtHeaderThongBaoTienTip").innerHTML = "Tiền tip cho mỗi người : <br>" + tipForEveryone + " $";
    document.getElementById("txtThongBaoTienTip").style.display = "block";
})
function check() {

    var data = new Array();
    data[0] = document.getElementById('txtTongTien').value;
    data[1] = document.getElementById('txtSoNguoi').value;
    var myerror = new Array();
    myerror[0] = "Bạn chưa nhập tổng số tiền";
    myerror[1] = "Bạn chưa nhập số người";
    var informErr = new Array("e-total", "e-amount");
    for (i in data) {
        var error = myerror[i];
        var div = informErr[i];

        if (data[i] == "") {
            document.getElementById(div).innerHTML = error;
            document.getElementById(div).style.color = "red";
        } else {
            document.getElementById(div).innerHTML = "OK!";
            document.getElementById(div).style.color = "green";
        }
    }

}