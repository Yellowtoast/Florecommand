var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {

        //꽃 컨텐츠 변경
        document
            .getElementById("spring-flower")
            .src = "Chrysanthemum.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 국화';
        document
            .getElementById("flower-name")
            .innerText = "Chrysanthia"
        document
            .getElementById("flower-detail")
            .innerText = '국화는 차가운 가을서리를 맞으며 홀로 피어나는 고고한 꽃입니다. 우리가 살고 있는 지구별 식물의 절반이상이 국화과에 속한다고 하죠! 노란 국화의 꽃말은 "짝사랑", 흰 국화의 꽃말은 "성실과 진실, 그리고 감사"를 뜻한다고 합니다.'
        document
            .getElementById("family-detail")
            .innerText = "Carlquistia"
        document
            .getElementById("origin-detail")
            .innerText = "China"

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

            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Chrysanthemum010")');
        
            
    }
    if (page == 1) {
        document
            .getElementById("spring-flower")
            .src = "Cosmos.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 코스모스';
        document
            .getElementById("flower-name")
            .innerText = "Cosmos"

        document
            .getElementById("flower-detail")
            .innerText = '선선한 가을바람과 함께 찾아오는 코스모스는 색에 따라 여러 꽃말을 가지고 있습니다! 노란색 코스모스는 "자연미, 어린 연정"을, 빨간 코스모스는 "사랑"이라는 꽃말을 가지고 있습니다. 노란색 꽃의 꽃말이 대부분 부정적인 반면 코스모스는 아름다운 꽃말을 가지고 있네요!'
        document
            .getElementById("family-detail")
            .innerText = "Sunflower"
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

            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Cosmos001")');
     
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