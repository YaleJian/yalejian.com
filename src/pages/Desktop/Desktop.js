import React from 'react';
import {Brand, Icon} from "yale-ui";
import {Input} from "yale-ui";
import {Link} from "react-router-dom";
import {Button} from "yale-ui";
import './desktop.css';
import Header from "../common/Header";
import Footer from "../common/Footer";

/**
 * 桌面
 */
class Desktop extends React.Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }
    }

    render() {
        let data = [
            {name: "APP下载", link: "appDownload", icon: "i-ziyuan", bg: "grey"},
            {name: "Yale UI", link: "ui", icon: "i-uicn", bg: "grey"},
            {name: "摄影", link: "photo", icon: "i-chongwusheying", bg: ""},
            {name: "文章", link: "pic", icon: "i-book-2", bg: "green"},
            {name: "天气", link: "weather", icon: "i-duoyun1", bg: "white"},
            {name: "我的云盘", link: "pic", icon: "i-yunpan2", bg: "grey"},
            {name: "今天吃什么", link: "eatToday", icon: "i-zuofan", bg: ""},
            {name: "聊天", link: "chat", icon: "i-liaotian", bg: "grey"},
            {name: "账号设置", link: "pic", icon: "i-anquan", bg: "orange"},
            {name: "配置", link: "pic", icon: "i-huabanfuben1", bg: "blue"},
            {name: "反馈", link: "pic", icon: "i-fankui1", bg: "grey"},
            {name: "关于我", link: "pic", icon: "i-guanyu-", bg: "grey"},
            // {name: "广告播放器", link: "hfm", icon: "i-guanggaopai", bg: "white"},
        ];
        let apps = data.map((app) => {
            return <Link to={app.link} key={app.name}>
                <div><Button className={"app radius " + app.bg} content={<Icon name={app.icon}/>}/></div>
                <div className={"appName"}><Button className={"white"} content={app.name}/></div>
            </Link>
        });
        return <React.Fragment>
            <Brand name={"扬歌YaleJian"}/>
            <div className={"ya-homePage"}>
                <div className={"ya-h-search"}>
                    <Input type="search" className="ya-h-search-input right" placeholder={"搜索网页"}
                           onChange={this.search.bind(this)} onSearch={this.onSearch.bind(this)}
                           value={this.state.searchValue}/>
                </div>
                <div className={"ya-apps"}>
                    {apps}
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    }


    search = (searchValue) => {
        this.setState({searchValue});
    };
    onSearch = () => {
        window.location.href = "https://www.baidu.com/s?ie=utf-8&wd=" + this.state.searchValue;
    }
}

export default Desktop;