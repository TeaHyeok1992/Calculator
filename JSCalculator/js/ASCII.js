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
    
    // const choPattern = /[\u3131-\u314E]/g;  // 한글 초성의 유니코드 범위
    // const joongPattern = /[\u314F-\u3163]/g;  // 한글 중성의 유니코드 범위
    // const jongPattern = /[\u11A8-\u11C2]/g;  // 한글 종성의 유니코드 범위
    //const koreanPattern = /[\u1100-\u11FF\u3131-\u318E\uAC00-\uD7A3]/g;  // 자모 및 완성형 한글 포함
    const input = event.target.value;
        // event.target.value = input.replace(/[가-힣a-zA-Z]/g, '');
        event.target.value = input.replace(/[A-Za-z\u1100-\u11FF\u3131-\u318E\uAC00-\uD7A3]/g,'');
        //A-Z 영문대문자
        //a-z 영문소문자

        console.log("영문자,한글이 제거되었습니다.")

        // event.target.value = input.replace(choPattern,'');
        // console.log("한글초성이 제거되었습니다.")
        // event.target.value = input.replace(joongPattern,'');
        // console.log("한글중성이 제거되었습니다.")
        // event.target.value = input.replace(jongPattern,'');
        // console.log("한글종성이 제거되었습니다.")
        //정규표현식을 통한 입력시 자동삭제 기능
        //-- 문제점1. 한글 초성 인식이 안됨
        //-- 접근방식 유니코드로 초중종성 다 확인해서 막는방법
        //-- 다른방식
        


        
};
    
    




   
    
