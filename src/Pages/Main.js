import React from 'react'
import MainArticle from '../components/MainArticle';
import MainArticle2 from '../components/MainArticle2';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {

  useEffect(() => {
    AOS.init();
  })

  const imgSrcList = [
    {
      path: "https://assets.entrepreneur.com/content/3x2/2000/20180507200150-GettyImages-639336736.jpeg",
      text: "우리는 현재 더불어서 살아갑니다.",
    },
    {
      path: "https://t1.daumcdn.net/cfile/blog/99D6A3425CF9225B06",
      text: "모임을 가져보시는건 어떠세요?",
    },
    {
      path: "https://src.hidoc.co.kr/image/lib/2022/2/11/1644569794564_0.jpg",
      text: "여기서 새로운 모임을 가져보세요!",
    },
  ];

  // $(window).scroll(function(){

  //   var height = $(window).scrollTop();
    
  //   var y =  -1/500 * height + 115/50;
  //   $('.main-total').eq(0).css('opacity', y);
  
  //   console.log(height);

  //   var z = (-1/5000) * height + 565/500;
  //   $('.main-total').eq(0).css('transform', `scale( ${z} )`);
  // });
  return (
    <div>
        <div>
            <div data-aos="fade-up" className='Title-Article mt-20'>
              MO-INEE
            </div>
          </div>

      {imgSrcList.map((imgSrc, index) =>
        index % 2 === 0 ? (
          <div data-aos="fade-right"  key={`${index} images`} className="main-total">
            <MainArticle 
            
            path = {imgSrc.path}
            text = {imgSrc.text}
            />
          </div>
        ) : (
          <div data-aos="fade-left" key={`${index} images`} className="main-total">
            <MainArticle2 
            path = {imgSrc.path}
            text = {imgSrc.text}
            />
          </div>
        )
      )}
    </div>
  );
}

export default Main;