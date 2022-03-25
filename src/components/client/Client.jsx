import "./Client.scss"
import CountUp from 'react-countup';
const Client = ({ title, text, icon }) => {

    console.log(typeof(title));

    return (
        <div className="relvise__clients-col">
            <div className="relvise__clients-cardItem">
                <figure>
                    <img src={icon} alt="client-icon" />
                </figure>
                <h1>
                    <CountUp 
                    end = {parseInt(title)}
                    duration = {2}
                    suffix="+"
                />
                </h1>
                <p>{text} </p>
            </div>
        </div>
    )
}

export default Client;