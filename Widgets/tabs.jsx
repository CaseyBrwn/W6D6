import React from "react";

class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           selectedTab: props.tabs[0]
        };
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab (e) {
        e.preventDefault();
        const selectedTab = this.props.tabs[e.target.value];
        this.setState({selectedTab});
    }




    render() {
        const showTab = this.state.selectedTab.content;

        const titles = this.props.tabs.map ( (tab, idx) => <li key={idx} onClick={this.changeTab} value={idx}>{tab.title}</li> )
            

        return (
            <>
            <h1>{titles}</h1>
            <div>{showTab}</div>
            </>
        )


    }
}


export default Tabs;