import React from 'react';
import './eatToday.css'
import Header from "../common/Header";
import Main from "../common/Main";
import {Button} from "yale-ui";
class EatToday extends React.Component{

    render() {
        return <React.Fragment>
            <Header children={"今天吃什么"} className={"center"}/>
            <Main>
                <div className={"ya-eatToday"}>
                    <div className={"make"}>
                        <Button content={"生成菜谱"}/>
                    </div>
                    <div>今日菜谱</div>
                    <div>

                    </div>
                    <Button content={"保存今日菜谱"}/>
                </div>
            </Main>
        </React.Fragment>;
    }
}
export default EatToday;