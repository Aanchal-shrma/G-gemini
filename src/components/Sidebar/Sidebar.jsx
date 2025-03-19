import React, { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { context } from '../../context/Context';
import { useContext } from 'react';

function Sidebar() {

    const [extended, setExtended] = useState(false);
    const {onSent,prevPrompts, setRecentPrompt, newChat} = useContext(context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


  return (
    <div className='sidebar'>
        <div className='top'>
            <img onClick= {() => setExtended(prev => !prev)}className='menu' src={assets.menu_icon} height={30}/>
            <div onClick={() => newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="" height={20}/>
                {extended? <p>New chat</p>: null}
            </div>
            {extended? <div className="recent">
                <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => (
                        <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                        <img src={assets.msg_icon} alt="" height={30}/>
                        <p>{item.slice(0,15)}...</p>
                        </div>
                    ))}
                    
                       
                    
                    
                
            </div>: null
            }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" height={20}/>
                {extended? <p>Help</p>: null}
            </div>
            <div className="bottom-item  recent-entry">
                <img src={assets.history_icon} alt="" height={20}/>
                {extended? <p>Activity</p>: null}
            </div>
            <div className="bottom-item  recent-entry">
                <img src={assets.setting_icon} alt="" height={20}/>
                {extended? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
