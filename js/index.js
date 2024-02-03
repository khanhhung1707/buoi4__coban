//bài 1
function handleSapXep(){
    var integer1 = +document.getElementById("integer1").value;
    var integer2 = +document.getElementById("integer2").value;
    var integer3 = +document.getElementById("integer3").value;
    var sapXep =[integer1, integer2,integer3];
    sapXep.sort();
    document.getElementById("sapXep").innerHTML = `thứ tự là : ${sapXep}`;
    document.getElementById("sapXep").style.cssText = "background:gray;color:white;padding:20px;margin-top:30px";
}
//bài 2
function handleChao(){
    var question = document.getElementById("question").value;
    var answer;
    switch (question) {
        case "B":
            answer = "Xin chào Bố";
            break;
        case "M":
            answer = "Xin chào Mẹ";
            break;
        case "A":
            answer = "Xin chào anh trai";
            break;
        case "E":
            answer = "Xin chào em gái";
            break;
        default:
            answer = "bạn không phải người trong gia đình"
            break;
    }
    document.getElementById("hello").innerHTML = answer ;
    document.getElementById("hello").style.cssText = "background:gray;color:white;padding:20px;margin-top:30px";
}
//bài 3
function handleChanLe(){
    var soNguyen1 = +document.getElementById("soNguyen1").value;
    var soNguyen2 = +document.getElementById("soNguyen2").value;
    var soNguyen3 = +document.getElementById("soNguyen3").value;
    var dapAn1,dapAn2,dapAn3;
    if (soNguyen1 % 2 == 0){
        dapAn1 = "số nguyên thứ 1 là số chẵn"
    } else{
        dapAn1 = "số nguyên thứ 1 là số lẻ"
    }
    if (soNguyen2 % 2 == 0){
        dapAn2 = "số nguyên thứ 2 là số chẵn"
    } else{
        dapAn2 = "số nguyên thứ 2 là số lẻ"
    }
    if (soNguyen3 % 2 == 0){
        dapAn3 = "số nguyên thứ 3 là số chẵn"
    } else{
        dapAn3 = "số nguyên thứ 3 là số lẻ"
    }
    
    document.getElementById("chanLe").innerHTML =`${dapAn1} , ${dapAn2} , ${dapAn3}`;
    document.getElementById("chanLe").style.cssText = "background:gray;color:white;padding:20px;margin-top:30px";
}
//bài 4
function handleTamGiac(){
    var canh1 = +document.getElementById("canh1").value;
    var canh2 = +document.getElementById("canh2").value;
    var canh3 = +document.getElementById("canh3").value;
    var ketQua;
    if (canh1 == canh2 & canh1 == canh3){
        ketQua ="đây là tam giác đều";
    } else if(canh1 == canh2 & canh1 != canh3){
        ketQua ="đây là tam giác cân";
    } else if (canh1 == canh3 & canh1 != canh2){
        ketQua = "đây là tam giác cân";
    } else if (canh2 == canh3 & canh2 != canh1){
        ketQua ="đây là tam giác cân";
    } else if(canh1*canh1 == canh2*canh2 + canh3*canh3){
        ketQua ="đây là tam giác vuông";
    } else if(canh2*canh2==canh1*canh1 + canh3*canh3){
        ketQua ="đây là tam giác vuông";
    } else if(canh3*canh3 == canh1*canh1+canh2*canh2){
        ketQua ="đây là tam giác vuông";
    } else {
        ketQua ="đây là tam giác thường";
    }
    document.getElementById("tamGiac").innerHTML =`${ketQua}`;
    document.getElementById("tamGiac").style.cssText = "background:gray;color:white;padding:20px;margin-top:30px";
}