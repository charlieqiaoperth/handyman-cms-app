// Management.js
import {fetchOrders} from '../../api/order';
// import React from 'react';
import { Table, Divider} from 'antd';

export default class Orders extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: false,
        orders: [],
      };
    }
  
    componentDidMount() {
      this.setState({ isFetching: true, error: null});
      fetchOrders()
        .then(data => {
            console.log(data.data);         
          this.setState({ orders: data.data});
          console.log(this.state.orders)
        })
        .catch(error => {
          this.setState({ isFetching: false, error});
        });
    };
    
 
    columns = [
        {
          title: 'ID',
          dataIndex: '_id',
          key: 'id',
        //   render: text => <a href="javascript:;">{text}</a>,
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Grade',
          dataIndex: 'grade',
          key: 'grade',
        }, 
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
          },      
        {
        title: 'Customer',
        dataIndex: 'customer.customerName',
        key: 'customer',
        },    
        {
            title: 'Business',
            dataIndex: 'business',
            key: 'business',
          },  
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <a href="javascript:;">edit</a>
              <Divider type="vertical" />
              <a href="javascript:;">Delete</a>
            </span>
          ),
        },
      ];

    // orders = (data)=> {
    //    const x= data.map((e)=>{ 
    //         e.status,
    //         e.grade,
    //         e.comments,
    //         e._id
    //      });
    //     console.log(x);
    //     return x;
    // }
    render() {
      return (
        // <div>
        //   <BlockUi blocking={this.state.isFetching}>
        //     <div className="row" style={{ marginTop: 15 }}>
        //         {this.state.courses.map((course, index) => <CourseCard course={course} key={course._id} />)}
        //     </div>
        //   </BlockUi>
        // </div>
        // <div>
        //   {this.state.orders.map((order, index) => 
        //   <div key={index}>{(order.grade)}
        //   <span>{(order.status)}</span>
        //   </div>)}
        // </div>
        <div><Table columns={this.columns} dataSource={this.state.orders} /></div>
        // <div>{this.orders(this.state.orders)}</div>
      );
    }
  }
  