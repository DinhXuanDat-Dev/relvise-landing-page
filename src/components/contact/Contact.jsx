import "./Contact.scss"

const Contact = () => {

    return(
        <div className="relvise__contact">
            <div className="relvise__contact-container">
                <h2>Subcribe For Lastest <br/> Newsletter</h2>
                <form className="relvise__contact-form">
                    <input type="text" className="relvise__contact-formInput" placeholder="Your Email"></input>
                    <button className="relvise__contact-btnSubcribe">Subcribe</button>
                </form>
            </div>
        </div>  
    )
}

export default Contact;