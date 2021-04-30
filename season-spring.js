var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {

        //꽃 컨텐츠 변경
        document
            .getElementById("spring-flower")
            .src = "gerbera.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 거베라';
        document
            .getElementById("flower-name")
            .innerText = "Gerbera"
        document
            .getElementById("flower-detail")
            .innerText = '거베라는 다양한 색상으로 눈길을 사로잡는 국화과에 속하는 꽃입니다. 거베라의 꽃말은 색상별로 다릅니다. 빨간색은 "당신을 사랑합니다"  주황' +
                    '색은 "열정과 에너지" 분홍색은 "친절과 감사"  노란색은"행복과 우정"을 의미합니다. 거베라는 다양한 모양과 종류가 있어 상황이나 기분에 ' +
                    '따라 다른 꽃을 골라볼 수 있습니다.'
        document
            .getElementById("family-detail")
            .innerText = "Carlquistia"
        document
            .getElementById("origin-detail")
            .innerText = "South America"

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

        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Gerbera001")');
            
    }
    if (page == 1) {
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

            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Viola010")');
    }
    if (page == 2) {
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
            .innerText = '5월의 꽃 튤립! 빨간색 튤립의 꽃말은 "열정적인 사랑"이랍니다. 분홍색 튤립은 "애정과 배려", 보라색 튤립은 "영원한 사랑", 하얀색 튤' +
                    '립은 "새로운 시작", 노란색 튤립은 "바라볼 수 없는 사랑"이라는 꽃말을 가지고 있답니다. 가족에게도 사랑하는 사람에게도 선물하기 좋은 꽃' +
                    '일 것 같네요!'
        document
            .getElementById("family-detail")
            .innerText = "Tulipaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Northern China"

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
            document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=Tulipa001")'); 

    
    }
    if (page == 3) {
        document
            .getElementById("spring-flower")
            .src = "magnolia.png";
        document
            .getElementById("flowerindex")
            .innerHTML = '<img src="Rectangle1.png" alt="#"> 목련';
        document
            .getElementById("flower-name")
            .innerText = "Magnolia"
        document
            .getElementById("page4")
            .style
            .backgroundColor = 'white';

        document
            .getElementById("flower-detail")
            .innerText = '4월을 대표하는 봄꽃인 목련은 "이룰 수 없는 사랑"이라는 꽃말을 가지고 있지요. 꽃 뿐만 아니라 꺾은 가지에서도 아련한 향기를 뽐내는 꽃이' +
                    '랍니다. 누구에게나 아련하게 남아있는 첫사랑의 기억을 떠올리게 하지 않나요?'
        document
            .getElementById("family-detail")
            .innerText = "Magnoliaceae"
        document
            .getElementById("origin-detail")
            .innerText = "Southern China"

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



        //슬라이드 이동 함수
        document.getElementById("order-button").setAttribute('onclick','window.open("http://mytreelove.com/shop/item.php?it_id=magnolia001")');
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