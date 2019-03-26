import * as React from 'react'
import {ComponentExt} from '@utils/reactExt'
import { inject, observer } from 'mobx-react';
import { hot } from "react-hot-loader"
import {Button} from 'antd'

interface IProps {
  globalStore?: IGlobalStore.GlobalStore
}

@hot(module)
@inject('globalStore')
@observer
class Counter extends ComponentExt<IProps> { 
    
  increase = () => {
    this.props.globalStore.increase(); 
    
  }
  render(){
    console.log(this.props.globalStore);
      const num = this.props.globalStore.num
      return (
        <div>
          <div>{ num }</div>
          <Button type="primary" onClick={this.increase}>增加</Button>
          <Button>减少</Button>
        </div>
      )
  }
}

export default Counter