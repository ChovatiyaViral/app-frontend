import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../helper'
import Layout from '../../Layout'

export default function HomePage() {

    const [eventData, setEventData] = useState([]);
    const auth = localStorage.getItem('token')

    useEffect(() => {
        fetchEventData()
    }, [])

    const fetchEventData = async () => {
        if (auth) {
            try {
                await axios.get(baseURL + '/event', {
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

    const handleDeleteEvent = async (id) => {
        if (id) {
            try {
                await axios.delete(baseURL + `/event/delete/${id}`, {
                    headers: {
                        'x-access-token': `${auth}`,
                    }
                })
                    .then((res) => {
                        if (res.status === 200) {
                            setEventData([...res.data])
                        }
                    })

            } catch (error) {
                console.log("err", error);
            }
        }
    }

    return (
        <Layout>
            {eventData.map((item, index) => {
                return (
                    <div key={index} onClick={() => handleDeleteEvent(item._id)} style={{ cursor: 'pointer' }}>
                        {item.event_name}
                    </div>
                )
            })}
        </Layout>
    )
}
