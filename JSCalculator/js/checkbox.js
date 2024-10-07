function ckboxed(){
    var ckbox = document.getElementsByClassName('checkpad');
    if(ckbox.checked){
        document.getElementById('display').readOnly = false;
    }else{
        document.getElementById('display').readOnly = true;
    }
}
