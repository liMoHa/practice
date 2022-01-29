window.onload = () => {
    let btn1 = document.querySelector('.button1');
    let btn2 = document.querySelector('.button2');
    let btn3 = document.querySelector('.button3');

    btn1.onclick = () => {
        btn1.classList.toggle('active');
        document.querySelector('.box').classList.toggle('active');
    }

    btn2.onclick = () => {
        btn2.classList.toggle('active');
    }

    btn3.onclick = () => {
        btn3.classList.toggle('active');
    }
}