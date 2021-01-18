import { Grid } from '@material-ui/core'
import React from 'react'
import BasicButtonGroup from './BasicButtonGroup'
import GroupOrientation from './GroupOrientation'
import GroupSizesColors from './GroupSizesColors'
import SplitButton from './SplitButton'

export default function ButtonGroups() {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <BasicButtonGroup />
      </Grid>
      <Grid item>
        <GroupSizesColors />
      </Grid>
      <Grid item>
        <GroupOrientation />
      </Grid>
      <Grid item>
        <SplitButton />
      </Grid>
    </Grid>
  )
}
