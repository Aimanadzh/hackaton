import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../Header/Header";

// import Content from "./Content";
// import Sidebar from "./Sidebar";

const Home = (props) => {
    return (
        <Grid container spacing={3}>
            <Header/>
            {/* <Sidebar {...props}/> */}
            {/* <Content /> */}
        </Grid>
    );
};

export default Home;
