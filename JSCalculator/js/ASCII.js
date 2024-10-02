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


function Divide(){
    document.addEventListener("keydown", function(e) {
        // 아스키 코드를 가져오기
      
        var z= e.key.charCodeAt(0); // 눌린 키의 문자를 아스키로 변환
        var x= String.fromCharCode(z); // 아스키를 다시 문자로 변환

        if(42<= z <=43 && 45<= z <=57){
            add(x);
        }else{
            //실행하지 않음
        }
        
        
    });
    
    
}



   
    
