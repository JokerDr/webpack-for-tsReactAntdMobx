import * as React from "react"
import * as ReactDOM from "react-dom"
import {configure} from 'mobx'
import {Provider} from 'mobx-react'
import * as store from './store'
import Counter from '@views/Counter';
import App from "@shared/App/index";

configure({ enforceActions: 'observed' })
const render = () => {
  console.log(store.globalStore);
  ReactDOM.render(
    <Provider { ...store}>
      <Counter />
      {/* <App/> */}
    </Provider>,
    document.querySelector("#app")
  );
}; 
render();
