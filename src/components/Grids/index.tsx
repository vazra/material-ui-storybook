import { Grid } from '@material-ui/core'
import React from 'react'
import AutoGrid from './AutoGrid'
import CenteredGrid from './CenteredGrid'
import ComplexGrid from './ComplexGrid'
import FullWidthGrid from './FullWidthGrid'
import ImageGridList from './ImageGridList'
import SpacingGrid from './SpacingGrid'

export default function Grids() {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <CenteredGrid />
      </Grid>
      <Grid item>
        <FullWidthGrid />
      </Grid>
      <Grid item>
        <ComplexGrid />
      </Grid>
      <Grid item>
        <AutoGrid />
      </Grid>
      <Grid item>
        <SpacingGrid />
      </Grid>
      <Grid item>
        <ImageGridList />
      </Grid>
    </Grid>
  )
}
