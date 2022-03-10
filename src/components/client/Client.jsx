import "./Client.scss"
const Client = ({ title, text, icon }) => {

    return (
        <div className="relvise__clients-col">
            <div className="relvise__clients-cardItem">
                <figure>
                    <img src={icon} alt="client-icon" />
                </figure>
                <h1>{title}</h1>
                <p>{text} </p>
            </div>
        </div>
    )
}

export default Client;