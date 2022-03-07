import "./Client.scss"
const Client = ({ title, text, icon }) => {

    return (
        <div className="relvise__clients-col">
            <div className="relvise__clients-cardItem">
                <img src={icon} alt="setting-icon" />
                <h1>{title}</h1>
                <p>{text} </p>
            </div>
        </div>
    )
}

export default Client;