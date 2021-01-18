import { Grid } from '@material-ui/core'
import React from 'react'
import ButtonBases from './ButtonBases'
import ButtonSizes from './ButtonSizes'
import ContainedButtons from './ContainedButtons'
import IconButtons from './IconButtons'
import IconLabelButtons from './IconLabelButtons'
import OutlinedButtons from './OutlinedButtons'
import TextButtons from './TextButtons'

export default function Buttons() {
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <ContainedButtons />
      </Grid>
      <Grid item>
        <TextButtons />
      </Grid>
      <Grid item>
        <OutlinedButtons />
      </Grid>
      <Grid item>
        <ButtonSizes />
      </Grid>
      <Grid item>
        <IconLabelButtons />
      </Grid>
      <Grid item>
        <IconButtons />
      </Grid>
      <Grid item>
        <ButtonBases />
      </Grid>
    </Grid>
  )
}
