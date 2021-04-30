var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {

        //꽃 컨텐츠 변경
        document
            .getElementById("spring-flower")
            .src = "magnolia.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 목련';
        document
            .getElementById("flower-name")
            .innerText = "Magnolia "
        document
            .getElementById("flower-detail")
            .innerText = ' 목련이 가족에게 선물하기 좋은 꽃이라구요? 의외이지요? "이룰 수 없는 사랑"이라는 꽃말도 가지고 있지만,"고귀한 사랑, 은혜"라는 말도 가지고 있지요. 꽃 뿐만 아니라 꺾은 가지에서도 아련한 향기를 뽐내는 꽃이랍니다.'
        document
            .getElementById("family-detail")
            .innerText = "Magnoliaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Southern China"

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
        document
            .getElementById("order-button")
            .onClick = "window.open('http://mytreelove.com/shop/item.php?it_id=magnolia001')";
        
            
    }
    if (page == 1) {
        document
            .getElementById("spring-flower")
            .src = "carnation.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 카네이션';
        document
            .getElementById("flower-name")
            .innerText = "Carnation"

        document
            .getElementById("flower-detail")
            .innerText = '가족에게 선물하기 좋은 대표적인 꽃인 카네이션이에요!  물결무늬의 꽃잎이 아름답죠? 빨간색 카네이션에는 "어버이에 대한 사랑, 당신의 사랑을 믿습니다, 건강을 비는 사랑" 의 뜻이, 주황색 카네이션은 "순수국한 사랑"을, 파랑색 카네이션은 "행복"을 뜻하며 보라색 카네이션은 "기품과 자랑"이라는 꽃말을 가지고 있답니다!'
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


        //주문하러 가기 링크 변경
        document
            .getElementById("order-button")
            .onClick = "window.open('http://mytreelove.com/shop/item.php?it_id=Euphorbia001')";
     
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