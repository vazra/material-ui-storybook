import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import ButtonGroups from './components/ButtonGroups'
import Buttons from './components/Buttons'
import Grids from './components/Grids'
import Selects from './components/Selects'
import Types from './components/Types'
import ComponentList from './ConponentList'
export default function Routes() {
  return (
    <BrowserRouter>
      <div style={{ margin: '8px', padding: '16px', backgroundColor: 'lightgray' }}>
        <div>
          <Link to='/'>All</Link>&nbsp;|&nbsp;
          <Link to='/buttons'>Buttons</Link>&nbsp;|&nbsp;
          <Link to='/buttongroups'>ButtonGroups</Link>&nbsp;|&nbsp;
          <Link to='/selects'>Selects</Link>&nbsp;|&nbsp;
          <Link to='/types'>Typographies</Link>&nbsp;|&nbsp;
        </div>
      </div>
      <Switch>
        <Route path='/buttons'>
          <Buttons />
        </Route>
        <Route path='/buttongroups'>
          <ButtonGroups />
        </Route>
        <Route path='/grids'>
          <Grids />
        </Route>
        <Route path='/selects'>
          <Selects />
        </Route>
        <Route path='/types'>
          <Types />
        </Route>
        <Route path='/'>
          <ComponentList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
