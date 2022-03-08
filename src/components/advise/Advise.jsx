import "./Advise.scss"
const Advise = ({ title, text, img }) => {

    return (
        <div className="relvise__advises-col">
            <div className="relvise__advises-cardItem">
                <div className="relvise__advises-content">
                    <h3>{title}</h3>
                    <p>{text} </p>
                </div>
                <img src={img} alt="img-cover" />
            </div>
        </div>
    )
}

export default Advise;