import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import axios from 'axios';
import { baseURL, isAuthentication } from '../../helper';

export default function Events() {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetchEventData()
    }, []);

    const fetchEventData = async () => {
        if (isAuthentication()) {
            try {
                await axios.get(baseURL + '/partyEvents', {
                    headers: {
                        'x-access-token': `${isAuthentication()}`,
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
