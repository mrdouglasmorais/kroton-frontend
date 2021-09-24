import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Contato from './views/Contato';

function Router(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}


export default Router;