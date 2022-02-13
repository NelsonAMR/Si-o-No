let no = document.getElementById('no');
let si = document.getElementById('si');

si.addEventListener('click', function(){
    window.open('si.html', 'Gracias!', 'resizable');
});

no.addEventListener('click', function(){
    window.open('no.html', 'Gracias!', 'resizable');
})

no.addEventListener('mousemove', function(){
    let x = Math.random()*90;
    let y = Math.random()*90;

    // console.log(x + ' ' + y);
    no.style.right = x+'%';
    no.style.top = y+'%';
});