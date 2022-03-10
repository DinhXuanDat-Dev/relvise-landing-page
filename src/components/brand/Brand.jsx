import { hooli, lya, piperhat, stripe, aws, redditAlien  } from "./imports";
import Slider from "react-slick";
import "./Brand.scss"

const Brand = () => {

    var sliderItems = [hooli, lya, piperhat, stripe, aws, redditAlien]

    const sliderSettings = {
        infinite: true,
        speed: 500,
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                // slidesToShow: 1,
                // slidesToScroll: 1,
                infinite: true,
              }
            }
        ]
    };
    return(
        <div className="relvise__brand">
            <div className="relvise__brand-container">
                <div className="relvise__brand-logos">
                    <Slider {...sliderSettings}>
                        {sliderItems.map((item, index) => (
                            <div className="relvise__brand-sliderItem" key={index}>
                                <img src={item} alt="brand-img"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>  
    )
}

export default Brand;