var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {
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
            .getElementById("page1")
            .style
            .backgroundColor = 'white';
        document
            .getElementById("page2")
            .style
            .backgroundColor = '#4E4E4E';


        //주문하러 가기 링크 변경
        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/")');
     
    
    }
    if (page == 1) {
        document
            .getElementById("spring-flower")
            .src = "dhila.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 달리아';
        document
            .getElementById("flower-name")
            .innerText = "Dhila"
        document
            .getElementById("flower-detail")
            .innerText = '달리아는 국화과에 속하는 여름을 대표하는 꽃입니다. "당신의 사랑이 나를 행복하게 합니다."라는 꽃말을 가지고 있습니다. 원산지는 멕시코로 약 20여종의 원종이 자생하고 있습니다. 우리나라에서는 노지재배시 여름철 고온다습하고 비가 많이 와서 생육이 나쁘나 8월 하순부터 10월까지는 꽃이 선명해집니다.'
        document
            .getElementById("family-detail")
            .innerText = "Carlquistia"
        document
            .getElementById("origin-detail")
            .innerText = "Eurasia"

        //페이지 버튼 색상 변경
        document
            .getElementById("page2")
            .style
            .backgroundColor = 'white';
        document
            .getElementById("page1")
            .style
            .backgroundColor = '#4E4E4E';


        //주문하러 가기 링크 변경

            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Chrysanthemum010")');
            
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
        page=3;
    }
    
    changeFlowers(page)

    if(currentIdx > 0){
        moveSlide(currentIdx-1);
        }
    else{
        moveSlide(slideCount-1);
    }
    
});