import "./About.scss"
const About = () => {
    return (
        <div className="relvise__about">
            <div className="relvise__about-container">
                <div className="relvise__title">
                    <h1>Who We Are</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="relvise__about-wrapper">
                    <div className="relvise__about-media">
                        <iframe width="650" height="415" src="https://www.youtube.com/embed/Qj06rNemNI8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="relvise__about-content">
                        <div className="relvise__about-content__title">
                            <h1>Most trustest in our fields</h1>
                            <p>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                        </div>
                        <div className="relvise__about-content--item">
                            <h3>the quick fox jumps over the lazy dog </h3>
                            <p>Things on a very small scale...</p>
                        </div>
                        <div className="relvise__about-content--item">
                            <h3>the quick fox jumps over the lazy dog </h3>
                            <p>Things on a very small scale...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;