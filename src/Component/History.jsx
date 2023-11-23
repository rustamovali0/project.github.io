import React, { useContext } from 'react';
import Approved from './Images/Approved.png'
import NoApproved from './Images/NoAproved.png'
import { Context } from '../Context/Context';


const History = ({ history }) => {
  const { theme, setTheme } = useContext(Context);
  const { textColor, setTextColor } = useContext(Context)
  
  
  
  return (
    <div className={`col-4 mt-3 mx-4 p-4 ${theme} text-${textColor} `} style={{ height: "50rem", width: "74.5rem", backgroundColor: "white" }}>
    <div className="d-flex flex-column align-items-start">
        <h1 className={ `text-${textColor}`} style={{ color: "rgb(85, 95, 125)" }}>History</h1>
        <ul>
          {history.map((operation, index) => (
            <p key={index}>
              <div className="d-flex" style={{ fontSize: "1.15rem" }}>
                {operation.type === 'income' ? <div style={{ paddingRight: "2rem" }}><img src={Approved} alt="Approved" />
                </div> : <div style={{ paddingRight: "2rem" }}><img src={NoApproved} alt="Approved" /></div>}  {operation.description}
              </div>

            </p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default History;
