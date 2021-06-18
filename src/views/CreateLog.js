import React from 'react'
import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import './CreateLog.css'
import db from '../firebase'
import { Button } from '@material-ui/core'




export const CreateLog = () => {
    const [newLog, setNewLog] = React.useState('')
    const [newTitle, setNewTitle] = React.useState('')

    const onCreate = () => {
        db.collection('logs').add({title: newTitle,
            log : newLog
        })
    }

    return (
        <div>
             <div>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <img
            alt="picture"
              className="picture"
              src="https://cdn.dribbble.com/users/466099/screenshots/13801297/media/2eaeba50db771ad6586a277f90b174db.png"
            />
          </Grid>
          <Grid item>
            <FormControl size="medium">
              <h1>Take some time to relax and reflect.</h1>

              <TextField
                className="title"
                id="standard-basic"
                placeholder="What do you want to call this log?"
                size="medium"
                multiline
                onChange={(e) => setNewTitle(e.target.value) }
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl size="medium">
              <h2>
                Now we are going to release some difficult emotions and process
                them in a healthy way.{" "}
              </h2>
              <TextField
                className="journallog"
                id="my-input"
                placeholder="What has caused a strong emotion within you? Where does this pain come from? How do you go about resolving this pain when it comes back?"
                size="medium"
                multiline
                rows="8"
                onChange={(e) => setNewLog(e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
        <div className="buttons">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-end"
          >
            <Grid item>
              <Button variant="contained" color="primary" onClick={onCreate}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
        </div>
    )
}