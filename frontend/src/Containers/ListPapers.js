import React from "react";
import {connect} from 'react-redux'
import {getPapers,deletePaper} from '../Redux/actions.js'
import {Card, Row, Col, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


class ListPapers extends React.Component {

    componentDidMount() {
        this.props.getPapers();
    }

    deletePaper = (id) => {
        this.props.deletePaper(id, this.info);
    }

    info() {
        message.info('Paper Deleted');
    };

    render() {
        const papers = this.props.papers
        console.log(papers)

        return (
            <Col span={12} offset={6}>
                {papers.map(p => (
                    <Row gutter={[48, 48]}>
                        <Col span={24}>
                            <Card
                                key={p.id}
                                title={p.title}
                                style={{width: '100%'}}
                                actions={[
                                    <DeleteOutlined key="delete" onClick={()=>this.deletePaper(p.id)} />,
                                ]}
                            >
                                <p>{p.content}</p>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </Col>
        );
    }
}

const mapStateToProps = (state) => ({
    papers: state.papers
})

const mapDispatchToProps = {
    getPapers ,deletePaper
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPapers)