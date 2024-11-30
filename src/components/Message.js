import React from 'react';

const Message = ({ message }) => {
    if (!message) return null;

    return (
        <>
            <style>
                {`
                  
                    .message-popup-wrapper {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 9999;
                    }

                    .message-popup {
                        background-color: #fff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        max-width: 400px;
                        width: 100%;
                        animation: popup-fade 0.5s ease-out;
                    }

                    .message-content {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .message-success {
                        background-color: #4CAF50;
                        color: white;
                    }

                  
                  
                `}
            </style>

            <div className="message-popup-wrapper">
                <div className={`message-popup ${message.type === 'success' ? 'message-success' : 'message-error'}`}>
                    <div className="message-content">
                        {message.text}
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Message;
