import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Message({details}){
  return  (      
      
       <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">

          
            <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
            <h6 className="card-price text-center">{details.price}<span className="period">/month</span></h6>
            
            <ul className="fa-ul">

              {details.features.map((feature)=> {
                return(
                  <li className={
                    feature.enable ?"" : "text-muted"
                  }
                  >
                    <span>{feature.enable ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      <FontAwesomeIcon icon={faXmark} />
                    )
                  }
                  </span>
                    {feature.name}
                  </li>
                );
              })
              }

            </ul>
            
            <div className="d-grid">
             
              <button className="btn btn-primary text-uppercase">BUTTON</button>
            </div>


            </div>
            </div>
            </div> 
     
            
  );
} 
export default Message;



