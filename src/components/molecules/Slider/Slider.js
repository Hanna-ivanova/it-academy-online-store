import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.scss';
import { Component } from '../../../core/Component';

class Slider extends Component {
  static get observedAttributes() {
    return ['slides', 'width', 'height'];
  }

  initSwiper() {
    new Swiper('.it-slider-swiper', {
      modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 1000,
      slidesPerView: 2,
      effect: 'coverflow',
      grabCursor: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2000,
      },
    });
  }

  componentDidMount() {
    this.initSwiper();
  }
  render() {
    const { width, height } = this.props;

    return `
     <div 
     class="it-slider-swiper 
     style="${height ?? '300px'}; width:${width ?? '100%'}">
     <div class="swiper-wrapper">
        ${JSON.parse(this.props.slides)
          .map((slide) => {
            return `
            <div class="swiper-slide" >${slide}</div>
            `;
          })
          .join('')}
     </div>
         
       <div class="swiper-pagination"></div>    
   
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      </div> 
           `;
  }
}

customElements.define('it-slider', Slider);
