import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div>
        <Container>
            <Head>
                <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                ></link>
            </Head>
            <Header />
            {props.children}
        </Container>
        </div>
    );
};
export default Layout;