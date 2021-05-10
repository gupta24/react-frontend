import React , { useState } from 'react';
import './Cards.css';
import { Popup } from './Popup';

function Cards(props) {

    const dataList = props.users;

    const [hover , setHover] = useState(false);

    const getPopup = () => {
        setHover(true);
    }

    const closeHandler = () => { setHover(false); }


    return (
        <div className="main-container">
        {  
            dataList.map((usrEle, ind) => {

                if(ind === 3){
                    return( 
                        <div className="card-container" key={ind}>
                            <div className="card-img"> 
                                <img src={usrEle.thumbnail.small} className="imgL" alt='' /> 
                                <button onClick={getPopup}>Learn More</button>
                            </div>
                            <div className="popup">
                                {  
                                  hover ? <Popup hover={hover} close={closeHandler} usrEle={usrEle}/> : null
                                }
                            </div>
                            <div className="card-text">
                                <div className="card-title">
                                    <h1>{usrEle.title}</h1>
                                </div>
                                <div className="card-body">
                                    <p>{usrEle.content}</p>
                                </div>
                                <div className="author-name">
                                    <p>{usrEle.author.name} {'-'} {usrEle.author.role}</p>
                                </div>
                                <div className="date">
                                    <p>Nov 25, 2020</p>
                                </div>
                            </div>
                        </div>
                        
                    );
                }

                return(
                    <div className="card-container" key={ind}>
                        <div className="card-img">
                            <img src={usrEle.thumbnail.small}  alt='' />
                        </div>
                        <div className="card-text">
                            <div className="card-title">
                                <h1>{usrEle.title}</h1>
                            </div>
                            <div className="card-body">
                                <p>{usrEle.content}</p>
                            </div>
                            <div className="author-name">
                                <p>{usrEle.author.name} {'-'} {usrEle.author.role}</p>
                            </div>
                            <div className="date">
                                <p>Nov 25, 2020</p>
                            </div>
                        </div>
                    </div>
                    
                );
            })
        }
        </div>
    );
    
}

export default Cards;