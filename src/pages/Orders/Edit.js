
// import React from 'react';
import {fetchOrderById, addNewOrder} from '../../api/order';
import {
  Form,
  Radio,
  Input, 
  Button,
  Icon,
  Rate,
  Row,
  Col,
} from 'antd';
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
      isSaving: false,
      isFetching: false,
      error: null,
    };
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ isFetching: true, error: null});
    fetchOrderById(id)
      .then(data => {
          console.log(data);         
        this.setState({order: data});
          console.log(this.state.order);
        // console.log(this.state.order.status) 
      }).then(res => {   
        const hh="ew"
        if (hh!="new") {
        const order=this.state.order;   
            this.props.form.setFieldsValue(
        { status:`${order.status}`,
          comments:`${order.comments}`,
          customer:`${order.customer._id}`,
          business:`${order.business._id}`,
          category:`${order.category._id}`,
          jobLocation:`${order.jobLocation}`,
          grade:`${order.grade}`,
       }      
        )}
      })
      .catch(error => {
        this.setState({ isFetching: false, error});
      });
      // const {order}=this.state;
      
     
      // this.props.form.setFieldsValue(
      //   { comments:`${order.status}`},
      //   // { status:`${order.status}`},
      //   // { comments:order.status},
      //   // { customerObjectId:'accepted'},
      //   );
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const name=e.target;
        addNewOrder(values)
        .then(() => {
          this.setState({ isSaving: false });
          this.props.history.replace('/orders/management');
        })
        .catch(error => {
          this.setState({ isSaving: false, error });
        });
        // console.log('Received values of form: ', values);
      }
    });
  };
  handleCancel =()=>{
    this.props.history.replace('/orders/management');
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}> 
        <Form.Item label="Customer Id" hasFeedback>
          {getFieldDecorator('customer', {
            rules: [{ required: true, message: 'Please fill customerObjectId!' }],
          })(
            <Input placeholder="Please fill customerObjectId"/>            
          )}
        </Form.Item>
        <Form.Item label="Business Id" hasFeedback>
          {getFieldDecorator('business', {
            rules: [{ required: true, message: 'Please fill businessObjectId!' }],
          })(
            <Input placeholder="Please fill businessObjectId"/>            
          )}
        </Form.Item>
        <Form.Item label="Service type" hasFeedback>
          {getFieldDecorator('category', {
            rules: [{ required: true, message: 'Please fill categoryObjectId!' }],
          })(
            <Input placeholder="Please fill categoryObjectId"/>            
          )}
        </Form.Item>
        <Form.Item label="Status">
          {getFieldDecorator('status',{
            rules: [{ required: true}],
          })(
            <Radio.Group>
              <Radio value="booking">Booking</Radio>
              <Radio value="accepted">Accepted</Radio>
              <Radio value="finished">Finished</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="JobLocation" hasFeedback>
          {getFieldDecorator('jobLocation',{ initialValue: " " })(
            <Input.TextArea rows={2} placeholder="Please fill the job Location"/>            
          )}
        </Form.Item>
        <Form.Item label="Grade">
          {getFieldDecorator('grade', {
            initialValue: 0,
          })(<Rate />)}
        </Form.Item>
        <Form.Item label="Service Comments" hasFeedback>
          {getFieldDecorator('comments',{ initialValue: " " })(
            <Input.TextArea rows={2} placeholder="Please fill service comments"/>            
          )}
        </Form.Item>
       
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Row gutter={8}>
          <Col span={8}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          </Col>
          <Col span={8}>
          <Button type="primary" onClick={this.handleCancel}>Cancel</Button>
          </Col>
        </Row>
        </Form.Item>       
      </Form>
    );
  }
}

const EditView= Form.create({ name: 'validate_edit' })(Edit);
export  default EditView;


          