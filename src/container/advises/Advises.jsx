import {  adviseCover1, adviseCover2, adviseCover3, adviseCover4 } from "./imports"
import "./Advises.scss"
import Advise from "../../components/advise/Advise";

const advisesData = [
    {
        title: 'A single source of truth',
        text: 'Newton thought that light was made up of particles, but then it was discovered ',
        img: adviseCover1,
    },
    {
        title: 'Fastest way to organize',
        text: '“Quantum mechanics” is the description of the behaviour of mat',
        img: adviseCover2,
    },
    {
        title: 'Fastest way to take action',
        text: 'They describe a universe consisting of bodies moving',
        img: adviseCover3,
    },
    {
        title: 'Work better together',
        text: 'They finally obtained a consistent description of the behavio',
        img: adviseCover4,
    },
];

const Advises = () => {
    return (
        <div className="relvise__advises">
            <div className="relvise__advises-container">
                <div className="relvise__advises-title">
                    <h1>Practice Advise</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </p>
                </div>
                <div className="relvise__advises-row">
                    {advisesData.map((item, index) => (
                        <Advise 
                            title={item.title} 
                            text={item.text} 
                            img={item.img} 
                            key={item.title + index} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Advises;