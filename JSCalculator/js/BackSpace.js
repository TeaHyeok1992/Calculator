



function eradicate(){
    var screen =document.getElementById('display').value;
    var y =screen.split('').map(Number);
    y.pop();
    screen= y.join('');
    document.getElementById('display').value=screen;
    
}