import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Contato from './views/Contato';
import Courses from './views/Courses';

function Router(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={Contato} />
        <Route path="/cursos" component={Courses} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;