var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {

        //꽃 컨텐츠 변경
        document
            .getElementById("spring-flower")
            .src = "camellia.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 동백꽃';
        document
            .getElementById("flower-name")
            .innerText = "Camellia "
        document
            .getElementById("flower-detail")
            .innerText = ' 꽃이 없는 추운 계절에 피어나는 꽃, 동백꽃을 좋아시나요? 동백꽃은 12월부터 개화하여 4월까지 피어나는 꽃이랍니다. 흰 동백의 꽃말은 "비밀스런 사랑"이고 붉은 동백은 "누구보다 그대를 사랑합니다."입니다.'
        document
            .getElementById("family-detail")
            .innerText = "Camelliaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Himalayas"

        //페이지 버튼 색상 변경
        document
            .getElementById("page1")
            .style
            .backgroundColor = 'white';
        document
            .getElementById("page2")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page3")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page4")
            .style
            .backgroundColor = '#4E4E4E';

        //주문하러 가기 링크 변경

            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/")');
            
    }
    if (page == 1) {
        document
            .getElementById("spring-flower")
            .src = "Poinsettia.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 포인세티아';
        document
            .getElementById("flower-name")
            .innerText = "Poinsettia"

        document
            .getElementById("flower-detail")
            .innerText = '포인세티아의 꽃말은 "뜨거운 마음으로 축하한다"에요. 불타는 마음, 뜨거운 마음으로 축하할 때! 진정으로 축하하는 자리에 포인세티아를 둔답니다. 꽃모양을 보면 손을 펴서 박수를 치는듯이 보이기도 하고 붉은 잎이 뜨거운 마음을 의미하기 때문이랍니다. 포인세티아를 건낼 때는 이런 의미를 담아서 건내봐요!'
        document
            .getElementById("family-detail")
            .innerText = "Euphorbiaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Mexico"

        document
            .getElementById("page2")
            .style
            .backgroundColor = 'white';
        document
            .getElementById("page1")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page3")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page4")
            .style
            .backgroundColor = '#4E4E4E';

        //주문하러 가기 링크 변경
        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/")');
     
    }

}


var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 232,
    slideMargin = 6,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');
    
slides.style.width = (slideWidth + slideMargin ) * slideCount-slideMargin + 'px';

function moveSlide(num){
    slides.style.left = -num * 238 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click',function(){
    page++;
    page = page % 2;
    
    changeFlowers(page)

    if(currentIdx < (slideCount-1)){
        moveSlide(currentIdx+1);
        }
    else{
        moveSlide(0);
    }
    
    
});

prevBtn.addEventListener('click',function(){
    page = currentIdx-1;
    if(page<0){
        page=1;
    }
    
    changeFlowers(page)

    if(currentIdx > 0){
        moveSlide(currentIdx-1);
        }
    else{
        moveSlide(slideCount-1);
    }
    
});