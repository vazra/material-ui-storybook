import { Grid } from '@material-ui/core'
import React from 'react'
import CustomizedSelects from './CustomizedSelects'
import DialogSelect from './DialogSelect'
import GroupedSelect from './GroupedSelect'
import MultipleSelect from './MultipleSelect'
import NativeSelects from './NativeSelects'
import SimpleSelect from './SimpleSelect'

export default function Selects() {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <SimpleSelect />
      </Grid>
      <Grid item>
        <NativeSelects />
      </Grid>
      <Grid item>
        <GroupedSelect />
      </Grid>
      <Grid item>
        <DialogSelect />
      </Grid>
      <Grid item>
        <MultipleSelect />
      </Grid>
      <Grid item>
        <CustomizedSelects />
      </Grid>
    </Grid>
  )
}
