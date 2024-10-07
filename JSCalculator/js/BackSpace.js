



function eradicate(){
    var screen =document.getElementById('display').value;
    console.log(screen);
    var y =screen.split('');
    console.log("현재 리스트: "+y)
    y.pop();
    console.log("삭제후 리스트: "+y)
    screen= y.join('');
    document.getElementById('display').value=screen;
    
}