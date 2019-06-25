import { Card, Steps } from 'antd';
import {fetchOrderById} from '../../api/order';
const {Step} =Steps;

export default class Orders extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: false,
        order: [],
      };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ isFetching: true, error: null});
        fetchOrderById(id)
          .then(data => {
              console.log(data);         
            this.setState({ order: data});
            console.log(this.state.order.customer.customerName)
          })
          .catch(error => {
            this.setState({ isFetching: false, error});
          });
      };
    style = {
        width: "600px",
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
      };
    stepOrder=(statu)=>{
       const status=["booking","accepted","finished"]
       const index=status.indexOf(statu);
       return (
        <Steps size="small" current={index}>
        <Step title="Booking" />
        <Step title="Accepted" />
        <Step title="Finished" />
      </Steps>
       )
     }
     render() {
      return (
          <div>
        <Card style={this.style} actions={[<a>EDIT</a>, <a>DELETE</a>]}>
          <Card.Meta
            // avatar={<img 
            // alt=""
            // style={{ width: '64px', height: '64px', borderRadius: '32px' }}
            // src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            //     />}
            title={this.stepOrder(this.state.order.status)}            
            description="2019-06-23"
            />
            <div style={{ marginTop: "15px",display:'flex' }}>
                <div style={{ width:"50%",margin: "15px"}}>
                   <ul>
                    <li>Customer<span>{this.state.order.status}</span></li>
                    <li>Contact<span>
                    <ul>
                    <li>hah</li>
                    </ul>
                    </span></li>
                    <li>Job Location</li>
                    </ul>
                </div>
                <div style={{ width:"50%",margin: "15px"}}>
                <ul>
                    <li>Business<span>{this.state.order.status}</span></li>
                    <li>Contact</li>
                    <li>Grade</li>
                    <li>Comments</li>
                    </ul>
                </div>          
            </div>
        </Card>  
        </div>
      )
     }
    }