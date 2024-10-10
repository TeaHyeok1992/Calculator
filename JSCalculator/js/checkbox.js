function ckboxed(){
    var ckbox = document.getElementsByClassName('checkpad');
    if(ckbox.checked){
        document.getElementById('display').readOnly = false;
    }else{
        document.getElementById('display').readOnly = true;
    }
    // realonly 가 체크표시된 경우에 if가 들어가서 지워지지않는것으로 판단
}
