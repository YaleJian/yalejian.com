import React from 'react';
import {Brand} from "yale-ui";
import {Input} from "yale-ui";
import {Link} from "react-router-dom";
import {Button} from "yale-ui";
import './desktop.css';
import Footer from "../../layout/Footer";

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
            // {name: "网址收藏", link: "w", icon: "i-wsc", bg: ""},
            {name: "Yale UI", link: "ui", icon: "i-uicn", bg: ""},
            {name: "摄影", link: "photo", icon: "i-chongwusheying", bg: "orange"},
            // {name: "文章", link: "pic", icon: "i-book-2", bg: "green"},
            {name: "天气", link: "weather", icon: "i-duoyun1", bg: ""},
            // {name: "客户端下载", link: "appDownload", icon: "i-ziyuan", bg: ""},
            // {name: "我的云盘", link: "pic", icon: "i-yunpan2", bg: ""},
            // {name: "今天吃什么", link: "eatToday", icon: "i-zuofan", bg: ""},
            // {name: "聊天", link: "chat", icon: "i-liaotian", bg: ""},
            // {name: "账号设置", link: "pic", icon: "i-anquan", bg: "orange"},
            // {name: "配置", link: "pic", icon: "i-huabanfuben1", bg: "blue"},
            // {name: "反馈", link: "pic", icon: "i-fankui1", bg: ""},
            // {name: "关于我", link: "pic", icon: "i-guanyu-", bg: ""},
            // {name: "网页播放器", link: "hfm", icon: "i-guanggaopai", bg: ""},
        ];
        let apps = data.map((app) => {
            return <Link to={app.link} key={app.name}>
                <div><Button className={"app radius "} color={app.bg} icon={app.icon}/></div>
                <div className={"appName"}><Button className={""}>{app.name}</Button></div>
            </Link>
        });
        return <>
            <Brand name={"扬歌的时光"}/>
            <div className={"ya-homePage"}>
                <div className={"ya-h-search"}>
                    <Input type="search" className="ya-h-search-input" right placeholder={"搜索"}
                           onChange={this.search.bind(this)} onSearch={this.onSearch.bind(this)}
                           value={this.state.searchValue}/>
                </div>
                <div className={"ya-apps"}>
                    {apps}
                </div>
            </div>
            <Footer/>
        </>
    }


    search = (e) => {
        this.setState({searchValue : e.target.value});
    };
    onSearch = () => {
        window.location.href = "https://www.baidu.com/s?ie=utf-8&wd=" + this.state.searchValue;
    }
}

export default Desktop;