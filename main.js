// bài 1
document.getElementById("enterBai_1").onclick = function () {
    var sum = 0;
    var index = 0;
    do {
        sum += index;
        index++;
    } while (sum < 10000);
    document.getElementById("ketquaBai_1").innerHTML = "Số nguyên dương nhỏ nhất: " + (index - 1);
}
// bài 2
function getEle(id) {
    return document.getElementById(id);
}
function tinhBai2(numberN, numberX) {
    var sum = 0;
    for (var index = 1; index <= numberN; index++)
        sum += Math.pow(numberX, index);
    return sum;
}
document.getElementById("enterBai_2").onclick = function () {
    var numberN = getEle("inputN").value * 1;
    var numberX = getEle("inputX").value * 1;
    getEle("ketquaBai_2").innerHTML = "Tổng: " + tinhBai2(numberN, numberX);
}
// bài 3
function tinhBai3(number) {
    var sum = 1;
    for (var index = 1; index <= number; index++)
        sum = sum * index;
    return sum;
}
document.getElementById("enterBai_3").onclick = function () {
    var number = getEle("inputNumber").value * 1;
    getEle("ketquaBai_3").innerHTML = number + "!=" + tinhBai3(number);
}
// bài 4
function xuatDiv(number) {
    var content = "";
    if (number % 2 === 0) {
        getEle("ketquaBai_4").innerHTML += "Div Chẵn<br>"
        getEle("ketquaBai_4").style.background = "red";
        getEle("ketquaBai_4").style.color = "white";
    }
    else {
        getEle("ketquaBai_4").innerHTML += "Div Lẻ<br>"
        getEle("ketquaBai_4").style.background = "blue";
        getEle("ketquaBai_4").style.color = "white";
    }
}
function tinhBai4() {
    for (var index = 1; index <= 10; index++) {
        xuatDiv(index);
    }
}
document.getElementById("enterBai_4").onclick = function () {
    tinhBai4();
}
// bài thêm
function checkNumber(number) {
    var check = true;
    if (number < 2)
        check = false;
    for (var i = 2; i <= (number - 1); i++)
        if (number % i === 0) {
            check = false;
            break;
        }
    if (check == true)
        return true;
    else return false;
}
function tinhBaiThem(number) {
    var soNguyenTo = "";
    for (var i = 0; i < number; i++)
        if (checkNumber(i) == true)
            soNguyenTo += " " + i;
    getEle("ketQuaBaiThem").innerHTML = "Các số nguyên tố từ 1->" + number + ":<br>" + soNguyenTo;
}
document.getElementById("enterBai_Them").onclick = function () {
    var number = getEle("inputNumber_5").value * 1;
    tinhBaiThem(number);
}