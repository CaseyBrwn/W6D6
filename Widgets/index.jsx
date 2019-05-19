import React from 'react';
import Clock from "./clock";
import Tabs from "./tabs";

const Index = () => {

    const tab1 = {
        title: "QOD",
        content: "Don't forget to breathe under water",
    };
    const tab2 = {
        title: "To do",
        content: "Feed the 'gators by hand",
    };
    const tab3 = {
        title: "HW",
        content: "Photoshop your face on your face",
    };

    const tabs = [tab1, tab2, tab3];

        return (
            <>
            <Clock />
            <section className ="clickable">
            <Tabs tabs={tabs} className="insideClick" />
            <section className="insideCick"></section>
            </section>
           
            </>
        )
} 

{/* <Tabs tabs={tabs} /> */}



export default Index;