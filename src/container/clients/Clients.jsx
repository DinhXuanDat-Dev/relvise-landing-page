import {  users, statistics, reward, toolbox } from "./imports"
import Client from "../../components/client/Client";
import "./Clients.scss"

const clientsData = [
    {
        title: '972 +',
        text: 'Business and Finance ',
        icon: users,
    },
    {
        title: '181 +',
        text: 'Travel & Aviation',
        icon: statistics,
    },
    {
        title: '98%',
        text: 'Consumer Products',
        icon: reward,
    },
    {
        title: '746 +',
        text: 'Environmental',
        icon: toolbox,
    },
];

const Clients = () => {
    return (
        <div className="relvise__clients">
            <div className="relvise__clients-container">
                <div className="relvise__clients-title">
                    <h1>Every Client Matter</h1>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="relvise__clients-row">
                    {clientsData.map((item, index) => (
                        <Client 
                            title={item.title} 
                            text={item.text} 
                            icon={item.icon} 
                            key={item.title + index} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients;