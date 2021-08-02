import { Wrapper } from "./LayoutBanner.styles";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div>배너영역</div>
      <Slider {...settings}>
        <div>
          <h3>
            <img src="/images/profile.png" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="/images/profile.png" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="/images/profile.png" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="/images/profile.png" />
          </h3>
        </div>
        <div>
          <h3>
            <img src="/images/profile.png" />
          </h3>
        </div>
      </Slider>
    </Wrapper>
  );
}
