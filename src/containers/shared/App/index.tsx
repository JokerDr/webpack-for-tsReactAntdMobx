import * as React from 'react'
import { hot } from 'react-hot-loader';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

function Loading(){
    return <div>loading...</div>
}

const Home = React.lazy(() => import('@views/Home/Home'))
const Page = React.lazy(() => import("@views/Page/Page"));


@hot(module)
class App extends React.Component {
    render(){
        return (
            <Router>
               <React.Suspense fallback={Loading}>
                    <Switch>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/page" component={Page}></Route>
                    </Switch>
               </React.Suspense>
            </Router>
        )
    }
}
export default App