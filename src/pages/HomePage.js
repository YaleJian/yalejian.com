import React, {Component} from 'react';
import Desktop from "./modules/Desktop/Desktop";

/**
 * 主页
 */
class HomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Desktop/>
        );
    }
}

export default HomePage;
