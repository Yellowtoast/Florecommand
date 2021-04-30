var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {

        //꽃 컨텐츠 변경
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
            .src = "sunflower.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 해바라기';
        document
            .getElementById("flower-name")
            .innerText = "Sunflower"

        document
            .getElementById("flower-detail")
            .innerText = '8월을 대표하는 햇살같이 예쁜 해바라기 입니다. 노란색의 꽃잎이 두드러지는 아름다운 해바라기의 꽃말은 "숭배, 기다림, 당신만을 사랑합니다"입니다. 또 하나의 꽃말은 "프라이드(자존감)" 입니다. 친구나 연인에게도 좋지만 자신에게 선물하기에도 딱 좋은 꽃이네요!'
        document
            .getElementById("family-detail")
            .innerText = "Carlquistia"
        document
            .getElementById("origin-detail")
            .innerText = "North America"

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

        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Dahlia001")');
    }

    if (page == 2) {
        document
            .getElementById("spring-flower")
            .src = "hydrangea.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 수국';
        document
            .getElementById("flower-name")
            .innerText = "Hydrangea"
        document
            .getElementById("flower-detail")
            .innerText = '포근하고 풍성한 아름다움을 풍기는 수국의 꽃말은 "인내심이 강한 사랑, 진심, 사과"라고 하네요. 수국은 물을 좋아하는 꽃이라 물 수자가 들어가 수국이라 불립니다.  물이 어떤 성질을 띄고있느냐에 따라 꽃의 색도 달라진다고 하네요! 다양하고 화려한 색상의 수국을 구경해보세요!'
        document
            .getElementById("family-detail")
            .innerText = "Hydrangeaceae"
        document
            .getElementById("origin-detail")
            .innerText = "North America"

        document
            .getElementById("page3")
            .style
            .backgroundColor = 'white';
        document
            .getElementById("page1")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page2")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page4")
            .style
            .backgroundColor = '#4E4E4E';

        //주문하러 가기 링크 변경
    
           
            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Hydrangea_nikkoblue")');
    
    }
    if (page == 3) {
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
            .getElementById("page4")
            .style
            .backgroundColor = 'white';

        document
            .getElementById("flower-detail")
            .innerText = '5월의 꽃 카네이션, 물결무늬의 꽃잎이 아름답죠? 빨간색 카네이션에는 "어버이에 대한 사랑, 당신의 사랑을 믿습니다, 건강을 비는 사랑" 의 뜻이, 주황색 카네이션은 "순수국한 사랑"을, 파랑색 카네이션은 "행복"을 뜻하며 보라색 카네이션은 "기품과 자랑"이라는 꽃말을 가지고 있답니다!'
        document
            .getElementById("family-detail")
            .innerText = "Caryophyllaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Eurasia"

        document
            .getElementById("page1")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page2")
            .style
            .backgroundColor = '#4E4E4E';
        document
            .getElementById("page3")
            .style
            .backgroundColor = '#4E4E4E';

        //주문하러 가기 링크 변경

        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Dianthus003")');

        //슬라이드 이동 함수
       
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
    page = page % 4;
    
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