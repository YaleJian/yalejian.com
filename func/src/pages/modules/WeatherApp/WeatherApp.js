import React from 'react'
import {Brand,Weather} from "yale-ui";
const WeatherApp = ()=>{
    const url = "https://yalejian.com/service/weather/getData";
    return <div className={"heightFull"}>
        <Brand name={"天气"}/>
        <Weather url={url}/>
    </div>
}
export default WeatherApp