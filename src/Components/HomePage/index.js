import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { auth, baseURL } from '../../helper'
import Layout from '../../Layout'

export default function HomePage() {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetchEventData()
    }, [])

    const fetchEventData = async () => {
        if (auth) {
            try {
                await axios.get(baseURL + '/event', {
                    headers: {
                        'x-access-token': `${auth}`,
                        'Content-Type': 'application/json'
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
            <div>{eventData}</div>
        </Layout>
    )
}
