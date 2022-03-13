import React, { useState } from 'react'
import { makeStyles, TextField, Button } from '@material-ui/core'
import Layout from '../../Layout'
import axios from 'axios';
import { baseURL } from '../../helper';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    eventForm: {
        display: 'grid',
        width: '30%',
        margin: '40px auto',
        '& .MuiFormControl-root': {
            marginBottom: '10px'
        }
    },
    buttons: {
        display: 'flex',
        margin: '10px',
        justifyContent: 'center',

        '& .MuiButtonBase-root': {
            margin: '0px 10px'
        }
    }
}));

export default function PartyEventRegister() {
    const navigate = useNavigate();

    const [partyEventData, setPartyEventData] = useState({
        // poster_img: "",
        event_name: "",
        state: "",
        date: "",
        logo: "",
        // company_logo: "",
        company_name: "",
        sponsor: ""
    })

    const classes = useStyles();
    const auth = localStorage.getItem('token')

    const handleChange = (e) => {
        setPartyEventData({
            ...partyEventData,
            [e.target.name]: e.target.value
        })
    }

    const handleImageChange = (e) => {
        setPartyEventData({
            ...partyEventData,
            [e.target.name]: e.target.files[0]
        })
    }

    const handleResetData = () => {
        setPartyEventData({
            // poster_img: "",
            event_name: "",
            state: "",
            date: "",
            logo: "",
            // company_logo: "",
            company_name: "",
            sponsor: ""
        })
    }
    console.log("partyEventData", partyEventData);
    const handleSubmit = async () => {
        var formData = new FormData();
        if (partyEventData.event_name && partyEventData.state && partyEventData.date && partyEventData.company_name && partyEventData.sponsor) {
            formData.append("logo", partyEventData.logo);
            formData.append("event_name", partyEventData.event_name);
            formData.append("state", partyEventData.state);
            formData.append("date", partyEventData.date);
            formData.append("company_name", partyEventData.company_name);
            formData.append("sponsor", partyEventData.sponsor);
            try {
                await axios.post(baseURL + '/partyEvents', formData, {
                    headers: {
                        'x-access-token': `${auth}`,
                        "content_type": "application/json"
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            navigate('/party-event');
                            handleResetData();
                        }
                    })

            } catch (error) {
                console.log("err", error);
                handleResetData();
            }
        }

    }

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
                    onChange={handleChange}
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
                        onChange={handleImageChange}
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
                    onChange={handleChange}
                />
                {/* <div style={{ display: 'inline-grid' }}>
                    <label>Company Logo</label>
                    <TextField
                        required
                        id="standard-required"
                        // label="Company Logo required"
                        onChange={handleImageChange}
                        name="company_logo"
                        type="file"
                        variant="standard"
                    />
                </div> */}
                <TextField
                    required
                    id="standard-required"
                    label="state"
                    // defaultValue="Enter state"
                    name="state"
                    type="text"
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="standard-required"
                    label="sponsor"
                    // defaultValue="Enter state"
                    name="sponsor"
                    type="text"
                    variant="standard"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="standard-required"
                    label="date required"
                    name="date"
                    defaultValue=""
                    type="date"
                    variant="standard"
                    onChange={handleChange}
                />


                {/* <div style={{ display: 'inline-grid' }}>
                    <label>Poster Image</label>
                    <TextField
                        required
                        id="standard-required"
                        // label="postor image is required"
                        name="poster_img"
                        type="file"
                        onChange={handleImageChange}
                        variant="standard"
                    />
                </div> */}
                <div className={classes.buttons}>
                    <Button type="button" variant="contained">
                        Cancel
                    </Button>
                    <Button type="button" variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </form>
        </Layout>
    )
}
