


var numeric = false ;
//비교할 전역변수 설정
function add(char){
    if(numeric== false){

        if(isNaN(char)==true){
            //연산자가 두번나올경우에는 입력하지 않습니다.
        }else{
            document.getElementById('display').value += char;
        }
    }else{
        document.getElementById('display').value += char;
    }

    if(isNaN(char) == true){
        numeric = false ;
    }else {
        numeric = true ;
    }
}


function calculation(){
    var values=document.getElementById('display');
    var retur=eval(values.value);
    //eval은 계산하는 매서드
    var fin=document.getElementById('finish');
    fin.value=retur;
}    
function reset(){
    var values=document.getElementById('display');
    var fin=document.getElementById('finish');
    values.value="";
    fin.value="";
}