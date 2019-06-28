import { Form, Row, Col, Input, Button, Icon } from 'antd';

class searchForm extends React.Component {
//   state = {
//     lode: false,
//   };
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        {/* <Row gutter={24}>{this.getFields()}</Row> */}
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const searchCondition = Form.create({ name: 'advanced_search' })(searchForm);
export default searchCondition;