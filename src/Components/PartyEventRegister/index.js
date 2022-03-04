import React from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core'
import Layout from '../../Layout'

const useStyles = makeStyles(theme => ({
    eventForm: {
        display: 'grid',
        width: '30%',
        margin: '40px auto',
        '& .MuiFormControl-root': {
            marginBottom: '10px'
        }
    },
    buttons:{
        display:'flex',
        margin:'10px',
        justifyContent:'center',

        '& .MuiButtonBase-root':{
            margin:'0px 10px'
        }
    }
}));

export default function PartyEventRegister() {
    const classes = useStyles();
    return (
        <Layout>
            <form className={classes.eventForm}>
                <TextField
                    required
                    id="standard-required"
                    label="event name"
                    // defaultValue="Enter Event Name"
                    name="event_name"
                    type="text"
                    variant="standard"
                />
                <div style={{ display: 'inline-grid' }}>
                    <label>Logo</label>
                    <TextField
                        required
                        id="standard-required"
                        // label="Logo required"
                        name="logo"
                        type="file"
                        variant="standard"
                    />
                </div>
                <TextField
                    required
                    id="standard-required"
                    label="company name"
                    // defaultValue="Enter Comapny Name"
                    name="company_name"
                    type="text"
                    variant="standard"
                />
                <div style={{ display: 'inline-grid' }}>
                    <label>Logo</label>
                    <TextField
                        required
                        id="standard-required"
                        // label="Company Logo required"
                        name="company_logo"
                        type="file"
                        variant="standard"
                    />
                </div>
                <TextField
                    required
                    id="standard-required"
                    label="state"
                    // defaultValue="Enter state"
                    name="state"
                    type="text"
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-required"
                    label="state"
                    // defaultValue="Enter state"
                    name="state"
                    type="text"
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-required"
                    label="date required"
                    name="date"
                    defaultValue=""
                    type="date"
                    variant="standard"
                />


                <div style={{ display: 'inline-grid' }}>
                    <label>Logo</label>
                    <TextField
                        required
                        id="standard-required"
                        // label="postor image is required"
                        name="poster_img"
                        type="file"
                        variant="standard"
                    />
                </div>
                <div className={classes.buttons}>
                    <Button type="button" variant="contained">
                        Cancel
                    </Button>
                    <Button type="button" variant="contained" color="primary" >
                        Submit
                    </Button>
                </div>
            </form>
        </Layout>
    )
}
