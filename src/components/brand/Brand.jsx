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
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    return(
        <div className="relvise__brand">
            <div className="relvise__brand-container">
                <div className="relvise__brand-logos">
                    <Slider {...sliderSettings}>
                        {sliderItems.map((item, index) => (
                            <div className="relvise__brand-sliderItem">
                                <img src={item} alt={item + index}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>  
    )
}

export default Brand;