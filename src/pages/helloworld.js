import { Card, Steps } from 'antd';
const {Step} =Steps;

export default () => {
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',
      };
     const stepOrder=()=>{
       return (
        <Steps size="small" current={2}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
       )
     }
      return (
        <Card style={style} actions={[<a>EDIT</a>, <a>DELETE</a>]}>
          <Card.Meta
            // avatar={<img 
            // alt=""
            // style={{ width: '64px', height: '64px', borderRadius: '32px' }}
            // src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            //     />}
            title={stepOrder()}            
            description="2019-06-23"
            />
            
            <p>ixixihahh</p>
            <p>ixixihahh</p>
            <p>ixixihahh</p>
            <p>ixixihahh</p>
            <p>ixixihahh</p>
            <p>ixixihahh</p>
        </Card> 
      //   <Steps size="large" current={1}>
      //   <Step title="Finished" />
      //   <Step title="In Progress" />
      //   <Step title="Waiting" />
      // </Steps>
      
      )
    }