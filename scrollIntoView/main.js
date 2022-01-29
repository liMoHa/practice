const navBar = document.querySelector(".nav-bar");
navBar.addEventListener('click', (e) =>{
    const target = e.target;
    const link = target.dataset.link;
    console.log(link);
    if(link == null){
        return;
    }
    else{
        const element = document.querySelector(`.${link}`);
        element.scrollIntoView({behavior:"smooth", block:"end"});

    }
});