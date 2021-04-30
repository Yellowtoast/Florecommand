var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {

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
        .innerText = '달리아는 연인에게 선물하기 정말 좋은 꽃이지요! "당신의 사랑이 나를 행복하게 합니다."라는 꽃말을 가지고 있습니다. 원산지는 멕시코로 약 20여종의 원종이 자생하고 있습니다. 우리나라에서는 노지재배시 여름철 고온다습하고 비가 많이 와서 생육이 나쁘나 8월 하순부터 10월까지는 꽃이 선명해집니다.'
    document
        .getElementById("family-detail")
        .innerText = "Carlquistia"
    document
        .getElementById("origin-detail")
        .innerText = "Eurasia"

    //페이지 버튼 색상 변경
    document
        .getElementById("page1")
        .style
        .backgroundColor = 'white';
    document
        .getElementById("page2")
        .style
        .backgroundColor = '#4E4E4E';


    //주문하러 가기 링크 변경

        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Chrysanthemum010")');
        
            
    }
    if (page == 1) {
        document
            .getElementById("spring-flower")
            .src = "tulip.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 튤립';
        document
            .getElementById("flower-name")
            .innerText = "Tulip"
        document
            .getElementById("flower-detail")
            .innerText = '빨간색 튤립의 꽃말은 "열정적인 사랑"이랍니다. 연인에게 뜨거운 사랑을 고백하기 딱 좋은 꽃이죠? 보라색 튤립은 "영원한 사랑", 하얀색 튤' +
                    '립은 "새로운 시작", 노란색 튤립은 "바라볼 수 없는 사랑"이라는 꽃말을 가지고 있답니다. 사랑하는 사람에게 선물하기 좋은 꽃' +
                    '일 것 같네요!'
        document
            .getElementById("family-detail")
            .innerText = "Tulipaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Northern China"

        document
            .getElementById("page2")
            .style
            .backgroundColor = 'white';
        document
            .getElementById("page1")
            .style
            .backgroundColor = '#4E4E4E';


        //주문하러 가기 링크 변경
            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Tulipa001")'); 
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