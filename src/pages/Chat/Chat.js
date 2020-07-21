import React from "react";
import Header from "../common/Header";

/**
 * 聊天
 */
class Chat extends React.Component{
    render() {
        return <React.Fragment>
            <Header children={"聊天"} className={"center"}/>
            <div className={"ya-chat"}>

            </div>
            </React.Fragment>
    }
}
export default Chat;