import React from "react";
import Header from "../layout/Header";

/**
 * 聊天
 */
class Chat extends React.Component{
    render() {
        return <>
            <Header children={"聊天"} className={"center"}/>
            <div className={"ya-chat"}>

            </div>
            </>
    }
}
export default Chat;