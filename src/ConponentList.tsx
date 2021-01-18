import { Grid } from '@material-ui/core'
import React from 'react'
import ButtonGroups from './components/ButtonGroups'
import Buttons from './components/Buttons'
// import Grids from './components/Grids'
import Selects from './components/Selects'
import Types from './components/Types'

function ComponentList() {
  return (
    <div>
      <Grid container direction='column' justify='center' alignItems='stretch'>
        <Grid item>
          <Buttons />
        </Grid>
        <Grid item>
          <ButtonGroups />
        </Grid>
        <Grid item>
          <Selects />
        </Grid>
        <Grid item>
          <Types />
        </Grid>
      </Grid>
    </div>
  )
}

export default ComponentList
