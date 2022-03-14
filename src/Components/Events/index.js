import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import axios from 'axios';
import { baseURL } from '../../helper';

export default function Events() {

    const [eventData, setEventData] = useState([]);
    const auth = localStorage.getItem('token')

    useEffect(() => {
        fetchEventData()
    }, []);

    const fetchEventData = async () => {
        if (auth) {
            try {
                await axios.get(baseURL + '/partyEvents', {
                    headers: {
                        'x-access-token': `${auth}`,
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setEventData(res.data)
                        }
                    })

            } catch (error) {
                console.log("err", error);
            }
        }
    }

    console.log("eventData",eventData);
    return (
        <Layout>
            {
                eventData && eventData.length ?
                    <>
                        {
                            eventData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img src={item.logo} alt="logo image" />
                                    </div>
                                )
                            })
                        }
                    </>
                    : null
            }
        </Layout>
    )
}
