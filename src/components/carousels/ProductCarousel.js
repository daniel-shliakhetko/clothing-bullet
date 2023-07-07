import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCard from "../cards/ProductCard";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCarousel = (props) => {
  const sliderRef = useRef();

  return (
    <div className="flex items-center">
      <button onClick={() => sliderRef.current?.slidePrev()}>
        <FontAwesomeIcon
          className="h-8 w-8 text-indigo-500 pl-2"
          icon={faArrowLeft}
        />
      </button>
      <Swiper
        onSwiper={(it) => (sliderRef.current = it)}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: "",
          nextEl: "",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {props.products && props.products.length > 0
          ? props.products.map((product, i) => (
              <SwiperSlide key={i}>
                <div className="my-6 flex justify-center">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))
          : [null, null, null, null].map((product, i) => (
              <SwiperSlide key={i}>
                <div className="my-6 flex justify-center">
                  <ProductCard product={product} />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
      <button onClick={() => sliderRef.current?.slideNext()}>
        <FontAwesomeIcon
          className="h-8 w-8 text-indigo-500 pr-2"
          icon={faArrowRight}
        />
      </button>
    </div>
  );
};

ProductCarousel.propTypes = {
  products: PropTypes.array,
};

export default ProductCarousel;
