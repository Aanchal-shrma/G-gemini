import React, { useContext, useState} from 'react'
import './Main.css';
import {assets} from '../../assets/assets'
import { context } from '../../Context/Context';



function Main() {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(context);
  

  return (
    <>
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">


        {!showResult ? <>
            <div className="greet">
            <p><span>Hello Dev,</span></p>
            <p>How can I help You today?</p>
        </div>
        <div className="cards">
            <div className="card dark:bg-gray-800 dark:text-white">
                <p>Suggest beautiful places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" height={30}/>
            </div>
            <div className="card dark:bg-gray-700">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" height={30}/>
            </div>
            <div className="card">
                <p>Brielfly summarize this concept  urban Planning</p>
                <img src={assets.bulb_icon} alt="" height={30}/>
            </div>
            <div className="card">
                <p>Brainstorm team bonding activities for our work refreat</p>
                <img src={assets.msg_icon} alt="" height={30} />
            </div>
            
        </div>
        
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? <div className='loading'>
                <hr />
                <hr />
                <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
            </div>
        </div>
        }
       
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} placeholder='enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" height={30}/>
                    <img src={assets.mic_icon} alt="" height={30}/>
                    {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" height={30}/> : null}
                </div>
            </div>
            <p className='bottom-info'>
                Gemini can make mistakes.check important information
            </p>
        </div>
      </div>

    </div>
    </>
  )
}


export default Main
