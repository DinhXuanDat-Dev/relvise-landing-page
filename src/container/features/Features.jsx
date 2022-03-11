import Feature from "../../components/feature/Feature";
import { iconSetting, iconSettingWhite} from "./imports";
import "./Features.scss"

const featuresData = [
    {
        title: 'Surface transport & logistic',
        text: 'We focus on ergonomics and meeting you where you work. ',
        icon: iconSetting,
        color: '#FF7B47',
        background: '#fff'
    },
    {
        title: 'Save money and item',
        text: 'Just type what\'s on your mind and we\'ll get you there.',
        icon: iconSetting,
        color: '#FF7B47',
        background: '#fff'
    },
    {
        title: 'Environmental Consulting',
        text: 'the quick fox jumps over the lazy dog.',
        icon: iconSettingWhite,
        color: '#fff',
        background: '#0D5C63',
    },
];


const Features = () => {
    return (
        <div className="relvise__features" id="product">
            <div className="relvise__features-container">
                <div className="relvise__features-row">
                    {featuresData.map((item, index) => (
                        <Feature 
                            title={item.title} 
                            text={item.text} 
                            icon={item.icon} 
                            background={item.background} 
                            color={item.color}
                            key={item.title + index} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;