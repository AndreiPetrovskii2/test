let months = document.getElementById('months');
let grids = document.querySelectorAll('.grid');
for (let grid of grids) {
    let lis = grid.querySelectorAll("li");
    for (let li of lis) {
        let clicks = 0;
        li.addEventListener('click', function() {
            clicks++;
            let window = document.createElement('div');
            window.classList.add('window');
            window.innerHTML = 'Привет,к сожалению я не умею привязывать время к ячейкам грида :)' + li.innerHTML;
            window.style.top = (li.offsetTop - 75) + 'px'; 
            window.style.left = (li.offsetLeft - 50) + 'px'; 
            document.body.appendChild(window);
            setTimeout(function() {
                window.remove();
            }, 1000);    
            if(clicks<=9){            
                li.style.backgroundColor = '#ACD5F2';
            } else if(clicks <= 19){
                li.style.backgroundColor = '#7FA8C9';
            }else if(clicks <= 29) {
                li.style.backgroundColor = '#527BA0';
            }else{
                li.style.backgroundColor = '#254E77';
            }           
        });
    }
}


/*let months = document.getElementById('months');
let grids = document.querySelectorAll('.grid');
for (let grid of grids) {
    let lis = grid.querySelectorAll("li");
    for (let li of lis) {
        li.addEventListener('click', function() {
            li.style = 'background-color: yellow;'
        });
    }
}*/