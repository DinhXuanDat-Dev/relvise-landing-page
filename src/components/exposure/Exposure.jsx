import "./Exposure.scss"
import { tel, location, send } from "./imports"

const exposuresData = [
    {
        icon: tel,
        email_1: 'georgia.young@example.com',
        email_2: 'georgia.young@ple.com',
        title: 'Get support',
        btn_text: 'Submit Request',
        color: "#FF7B47"
    },
    {
        icon: location,
        email_1: 'georgia.young@example.com',
        email_2: 'georgia.young@ple.com',
        title: 'Get support',
        btn_text: 'Submit Request',
        color: "#FFF",
    },
    {
        icon: send,
        email_1: 'georgia.young@example.com',
        email_2: 'georgia.young@ple.com',
        title: 'Get support',
        btn_text: 'Submit Request',
        color: "#FF7B47",
    },
];

const Exposure = () => {

    return (
        <div className="relvise__exposure">
            <div className="relvise__exposure-container">
                <div className="relvise__title">
                    <h1>Get In Touch</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="relvise__exposure-wrapper">
                    {exposuresData.map((item, index) => (
                        <div className="relvise__exposure-item" background={item.color} key={index}>
                            <div className="relvise__icon">
                                <img src={item.icon} alt="relvise-icon"></img>
                            </div>
                            <h6>{item.email_1}</h6>
                            <h6>{item.email_2}</h6>
                            <h5>{item.title}</h5>
                            <div>
                                <button className="relvise__exposure-btn">
                                    {item.btn_text}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Exposure;