import { photos } from "../productList/productList";
import { Image } from "@nextui-org/react";
import HeartFav from "@/components/globalComponents/heartFav";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 200,

    customPaging: function () {
      return (
        <div className="dot -mt-2">
          <div>&nbsp;</div>
        </div>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div>
      <Slider {...settings}>
        {photos.map((item, index) => (
          <div key={index} className="bg-red-500 flex-1">
            <Image src={item.src} width={240} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora voluptatum reprehenderit quisquam nemo obcaecati facere illo quos quas ullam minus, culpa illum veritatis eaque explicabo earum quasi fugiat a. Tempora.</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
