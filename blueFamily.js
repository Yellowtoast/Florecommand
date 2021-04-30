var page = 0;
   

function changeFlowers(page) {



    if (page == 0) {
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
    page = page % 1;
    
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