// Management.js
import {fetchOrders} from '../../api/order';

import { Table, Divider} from 'antd';
import Link from 'umi/link';

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
          render: (text, record) => (
            <span>    
           
            <Link
                to={{
                    pathname: `/orders/management/${text}`,           
                }}>{text}
            </Link>          
            </span>      
          ),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        // {
        //   title: 'Grade',
        //   dataIndex: 'grade',
        //   key: 'grade',
        // }, 
        // {
        //     title: 'Comments',
        //     dataIndex: 'comments',
        //     key: 'comments',
        //   },      
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
          dataIndex: '_id',
          key: 'action',
          render: (text, record) => (
            // onClick={(e) => { this.haha(text); }}
            <span>
               <Link
                to={{
                    pathname: `/orders/management/edit/${text}`,           
                }}>Edit
            </Link>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
          </span>
          ),
        },
      ];
    haha(e) {
        alert(e);
        <Link to="/orders/e;"></Link>
    }

    render() {
      return (
   
        <div><Table columns={this.columns} dataSource={this.state.orders} /></div>
       
      );
    }
  }
  