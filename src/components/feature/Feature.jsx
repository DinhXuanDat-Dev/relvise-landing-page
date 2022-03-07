import "./Feature.scss"
const Feature = ({ title, text, icon, color, background }) => {

    return (
        <div className="relvise__features-col" style={{background}}>
            <div className="relvise__features-cardItem">
                <img src={icon} alt="setting-icon" />
                <h3 style={{color}}>{title}</h3>
                <p>{text} </p>
            </div>
        </div>
    )
}

export default Feature;