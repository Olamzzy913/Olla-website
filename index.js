smallScreenDropDown = document.getElementById('semiDrop1');
subSmallScreenDropDown = document.getElementById('semiDrop');
chnMenu = document.getElementById('chgnDrop');
subMenu = document.getElementById('subMenu');
fit = document.querySelector('.fit');
stick = document.getElementById('stick');
chevron = document.getElementById('chevron');
chevron1 = document.getElementById('chevron1');
chevron2 = document.getElementById('chevron2');
yearAct = document.getElementById('yearAct');
monAct = document.getElementById('monAct');
yearDiv = document.getElementById('yearDiv');
monDiv = document.getElementById('monDiv');


var lastScrollTop = 0;


window.addEventListener('scroll', (e) => {
    e.preventDefault();
    var scrollTop = window.pageYOffset || document
    .documentElement.scrollTop;
    if(scrollTop > lastScrollTop){ 
    stick.classList.add('sticky-bar');
    }
    else{  
    stick.classList.remove('sticky-bar');
    }
    lastScrollTop = scrollTop;
});


let display = 0;

monAct.addEventListener('click', (e) => {
    e.preventDefault();
    
    yearDiv.classList.remove('active1');
    yearDiv.classList.add('disactive1');
    monDiv.classList.add('active1');
    monDiv.classList.remove('disactive1');

    yearAct.classList.remove('active');
    yearAct.classList.add('disactive');
    monAct.classList.add('active');
    monAct.classList.remove('disactive');
})

yearAct.addEventListener('click', (e) => {
    e.preventDefault();
    
   

    yearDiv.classList.add('active1');
    yearDiv.classList.remove('disactive1');
    monDiv.classList.remove('active1');
    monDiv.classList.add('disactive1');

    yearAct.classList.add('active');
    yearAct.classList.remove('disactive');
    monAct.classList.remove('active');
    monAct.classList.add('disactive');
})


chevron.addEventListener('click', (e) => {
    e.preventDefault();

     
    if (display == 1) {
        chev = document.getElementById('chev');
        chev.style.rotate = '180deg';
        headText = document.getElementById('headText');
        headText.style.color = '#0c63e4'
        subTex = document.getElementById('subTex');
        subTex.style.display = 'block';
        display = 0;

        chev1 = document.getElementById('chev1');
        chev1.style.rotate = '0deg';
        headText1 = document.getElementById('headText1');
        headText1.style.color = '#041735'
        subTex1 = document.getElementById('subTex1');
        subTex1.style.display = 'none';
        display = 0;

        chev2 = document.getElementById('chev2');
        chev2.style.rotate = '0deg';
        headText2 = document.getElementById('headText2');
        headText2.style.color = '#041735'
        subTex2 = document.getElementById('subTex2');
        subTex2.style.display = 'none';
        display = 0;
    } else {
        chev = document.getElementById('chev');
        chev.style.rotate = '0deg';
        headText = document.getElementById('headText');
        headText.style.color = '#041735'
        subTex = document.getElementById('subTex');
        subTex.style.display = 'none';
        display = 1;
    }


       
   
})

chevron1.addEventListener('click', (e) => {
    e.preventDefault();

     
    if (display == 1) {
        chev1 = document.getElementById('chev1');
        chev1.style.rotate = '180deg';
        headText1 = document.getElementById('headText1');
        headText1.style.color = '#0c63e4'
        subTex1 = document.getElementById('subTex1');
        subTex1.style.display = 'block';
        display = 0;

        chev = document.getElementById('chev');
        chev.style.rotate = '0deg';
        headText = document.getElementById('headText');
        headText.style.color = '#041735'
        subTex = document.getElementById('subTex');
        subTex.style.display = 'none';
        display = 0;

        chev2 = document.getElementById('chev2');
        chev2.style.rotate = '0deg';
        headText2 = document.getElementById('headText2');
        headText2.style.color = '#041735'
        subTex2 = document.getElementById('subTex2');
        subTex2.style.display = 'none';
        display = 0;
    } else {
        chev1 = document.getElementById('chev1');
        chev1.style.rotate = '0deg';
        headText1 = document.getElementById('headText1');
        headText1.style.color = '#041735'
        subTex1 = document.getElementById('subTex1');
        subTex1.style.display = 'none';
        display = 1;
    }
  
})

chevron2.addEventListener('click', (e) => {
    e.preventDefault();

     
    if (display == 1) {
        chev2 = document.getElementById('chev2');
        chev2.style.rotate = '180deg';
        headText2 = document.getElementById('headText2');
        headText2.style.color = '#0c63e4'
        subTex2 = document.getElementById('subTex2');
        subTex2.style.display = 'block';
        display = 0;

        chev1 = document.getElementById('chev1');
        chev1.style.rotate = '0deg';
        headText1 = document.getElementById('headText1');
        headText1.style.color = '#041735'
        subTex1 = document.getElementById('subTex1');
        subTex1.style.display = 'none';
        display = 0;

        chev = document.getElementById('chev');
        chev.style.rotate = '0deg';
        headText = document.getElementById('headText');
        headText.style.color = '#041735'
        subTex = document.getElementById('subTex');
        subTex.style.display = 'none';
        display = 0;
    } else {
        chev2 = document.getElementById('chev2');
        chev2.style.rotate = '0deg';
        headText2 = document.getElementById('headText2');
        headText2.style.color = '#041735'
        subTex2 = document.getElementById('subTex2');
        subTex2.style.display = 'none';
        display = 1;
    }
  
    
})



chnMenu.addEventListener('click', (e) => {
    e.preventDefault();

  
    if (display == 1) {
        smallScreenDropDown.style.display = 'block';
        display = 0;
    } else {
        smallScreenDropDown.style.display = 'none';
        display = 1;
    };

  
});

subMenu.addEventListener('click', (e) => {
    e.preventDefault();

  
    if (display == 1) {
        subSmallScreenDropDown.style.display = 'block';
        display = 0;
        console.log(display);
    } else {
        subSmallScreenDropDown.style.display = 'none';
        display = 1;
    };
  
});



 
function hideShow() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
        console.log(display);
    } else {
        div.style.display = 'none';
        display = 1;
    };
} 

