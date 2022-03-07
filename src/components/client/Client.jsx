import "./Client.scss"
const Client = ({ title, text, icon }) => {

    return (
        <div className="relvise__Clients-col" style={{background}}>
            <div className="relvise__Clients-cardItem">
                <img src={icon} alt="setting-icon" />
                <h3 style={{color}}>{title}</h3>
                <p>{text} </p>
            </div>
        </div>
    )
}

export default Client;