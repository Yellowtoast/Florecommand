var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {
        document
        .getElementById("spring-flower")
        .src = "pansy.png";
    document
        .getElementById("flowerindex")
        .innerHTML = '<img src="Rectangle1.png" alt="#"> 제비꽃';
    document
        .getElementById("flower-name")
        .innerText = "Pansy"

    document
        .getElementById("flower-detail")
        .innerText = '제비꽃은 팬지라고도 불리는 흰색,노란색,자주색 세가지 종류로 개화합니다. 제비꽃은 "사색, 나를 생각해주세요" 라는 꽃말을 가지고 있습니다.' +
                ' 팬지 꽃의 세가지 전설 중 한가지는 사랑의 신 주피터가 연모하는 한 시' +
                '녀의 가슴에 화살을 쏜다는 것이 꽃을 쏘았고, 그때의 상처로 3가지 색의 제비꽃이 생겨났다는 것입니다.'
    document
        .getElementById("family-detail")
        .innerText = "Violaceae"
    document
        .getElementById("origin-detail")
        .innerText = "Iver"

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