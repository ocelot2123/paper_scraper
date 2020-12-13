import React from "react";
import {connect} from 'react-redux'
import {createPaper} from '../Redux/actions'
import "antd/dist/antd.css";
import {Form, Input, message, Button} from 'antd';


class CreateNewPaper extends React.Component {

    onFinish(values) {
        console.log(values);
        this.props.createPaper(values,this.info())
    }

    info() {
        message.info('Paper Created');
    };

    render() {
        const papers = this.props.papers
        console.log(papers)

        const layout = {
            labelCol: {span: 5},
            wrapperCol: {span: 12},
        };

        const validateMessages = {
            // eslint-disable-next-line
            required: '${label} is required!',
            types: {
                // eslint-disable-next-line
                email: '${label} is not validate email!',
                // eslint-disable-next-line
                number: '${label} is not a validate number!',
                // eslint-disable-next-line
                url: '${label} is not a validate url!',
            },
            number: {
                // eslint-disable-next-line
                range: '${label} must be between ${min} and ${max}',
            },
        };

        return (
            <Form
                {...layout}
                name="nest-messages"
                onFinish={this.onFinish.bind(this)}
                validateMessages={validateMessages}>

                <Form.Item name='title' label="Title" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>


                <Form.Item name='first_author' label="FistAuthor" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name='cited_by' label="CitedBy">
                    <Input/>
                </Form.Item>

                <Form.Item name='abstract' label="Abstract">
                    <Input/>
                </Form.Item>


                <Form.Item wrapperCol={{...layout.wrapperCol}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const mapStateToProps = (state) => ({
    papers: state.papers
})

const mapDispatchToProps = {
    createPaper
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPaper)