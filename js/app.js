let right = 0;
let top1 = 0;


document.body.onkeydown = function(e){
    e.preventDefault();

    if(e.keyCode===37){
        if(right < 73){
            right++;
            dog.style.right = `${right}%`;
            dog.style.transform = 'rotate(0)';
        }
    }
    else if(e.keyCode === 40){
        if(top1 < 67){
            top1++;
            dog.style.transform = 'rotate(275deg)';
            dog.style.top = `${top1}%`;
        }
    }
    else if(e.keyCode === 38){
        if(top1 > -9){
            top1--;
            dog.style.top = `${top1}%`;
            dog.style.transform = 'rotate(90deg)';
        }
    }
    else if(e.keyCode === 39){
        if(right > -13){
        right--;
        dog.style.right = `${right}%`;
        dog.style.transform = 'rotateY(180deg)';
        }
    }

    if ( top1 > 45 && right < 5){
        let h2 = document.querySelector('#btn1');
        h2.className = 'd-block'
        
    }
}


let btn = document.querySelector('.btn');

btn.onclick = function(){
    location.reload();
}
