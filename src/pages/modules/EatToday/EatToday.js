import React from 'react';
import './eatToday.css'
import Main from "../../layout/Main";
import {Button} from "yale-ui";
const EatToday = ()=>{

    return <>
        <Main>
            <div className={"ya-eatToday"}>
                <div className={"make"}>
                    <Button>生成菜谱</Button>
                </div>
                <div>今日菜谱</div>
                <div>

                </div>
                <Button>保存今日菜谱</Button>
            </div>
        </Main>
    </>;
}
export default EatToday;