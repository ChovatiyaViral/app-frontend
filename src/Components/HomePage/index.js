import React, { useEffect, useState } from 'react'
import { ApiDelete, ApiGet } from '../../apiHelper';
import Layout from '../../Layout'

export default function HomePage() {

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        fetchEventData()
    }, [])

    const fetchEventData = async () => {
        try {
            await ApiGet('/event')
                .then((res) => {
                    if (res.status === 200) {
                        setEventData(res.data)
                    }
                })

        } catch (error) {
            console.log("err", error);
        }
    }

    const handleDeleteEvent = async (id) => {
        if (id) {
            try {
                await ApiDelete(`/event/delete/${id}`)
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
