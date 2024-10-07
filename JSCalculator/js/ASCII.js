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


function onlyNumeric(event){
    
        // 아스키 코드를 가져오기
        var acode=event.key.charCodeAt(0);
        if(event.key == "Process"){
            //일반 문자열 걸러내기
            console.log("한글은 입력할수 없습니다.")
           
        }else if(58<=acode){    
            //영문자,사칙연산 이외의 기호 걸러내기
            console.log("영문자,특수기호 사용불가능")
        }else{
            
            

        }
    
        // var z= e.key.charCodeAt(0);
        // console.log(e.key.charCodeAt(0));
        // console.log(z); // 눌린 키의 문자를 아스키로 변환
        // var x= String.fromCharCode(z); // 아스키를 다시 문자로 변환

        // if(42<= z <=43 && 45<= z <=57){
        //     add(x);
        // }else{
        //     //실행하지 않음
        // }

        //특정상황에서 NaN 변수 특정되어 원인 파악 필요
        //-- 아마 Keydown에서 잡는값이 없는것 같음
        //onchange 걸었을떄 -- 값이누적됨
        //oninput 걸었을떄 값이 무한루프 돔
        //정규표현식으로 INPUT자체에 제한을 두었을떄 한글인식 불가능


        
};
    
    




   
    
