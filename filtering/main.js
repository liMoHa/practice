// 애니메이션 어떻게 주지..?

'use strict'
const buttons = document.querySelector('.buttons');

function loadAnimals(){
    return fetch("./data/animals.json")
        .then(response => response.json())
        .then(data => data.animals);
}

const animallArrayPromise = loadAnimals(); // 호출은 한 번만 하고 그뒤론 호출 된 애만 사용하고 싶음 그러려면 이렇게 사용하는 게 맞나?

const section = document.querySelector('.section');
const images = document.querySelector('.images');
function onShow(name){
    animallArrayPromise.then((animalsArray =>{
        images.classList.remove('anim-active');
        setTimeout( ()=> {
            const inner = animalsArray.filter((animal =>
                name === 'all' || animal.type===name ? true : false))
                .map(satisfyingAnimalArray => {
                    const imageLink = satisfyingAnimalArray.image;
                    return `<div><img src=${imageLink} /></div>`;
                })
                .join(' ');
            images.innerHTML = inner;
             // for each구문을 돌리든 filter함수를 사용하든 해야 함.
            console.log(inner);
            // 
            // 설마 비동기라 이 부분이 실행되는 동안 밑에 console.log가 먼저 실행되는 건가?
            images.classList.add('anim-active');
        } , 150);
    }));
}
buttons.addEventListener('click', (e)=>{
    console.log(e.target.dataset.name);
    const name = e.target.dataset.name;
    if(name == null){
        return;
    }
    else{
        // filtering
        onShow(name);
    }
});