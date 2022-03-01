import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    layoutDiv: {
        paddingTop:'64px'
    }
})

export default function Layout({ children }) {
    const classes = useStyles();
    return (
        <>
            <Header />
            <div className={classes.layoutDiv}>
                {
                    children
                }
            </div>
            <Footer />
        </>

    )
}
