import React from "react";
import {Layout, Menu} from 'antd';
import "antd/dist/antd.css";
import ListPapers from "./ListPapers";
import CreateNewPaper from "./CreateNewPaper";


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:1
        }
    }
    handleClick = e => {
        this.setState({selected:e})
    }
    render() {
        const { Header, Content } = Layout;

        return (
            <Layout>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[this.state.selected.toString()]}>
                        <Menu.Item key="1" onClick={() => this.handleClick(1)}> Read Papers</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.handleClick(2)}> Create Paper</Menu.Item>
                    </Menu></Header>
                <Content>
                    {// eslint-disable-next-line
                        this.state.selected==1?<ListPapers />: <CreateNewPaper />
                    }
                </Content>
            </Layout>
        );
    }
}


export default Blog