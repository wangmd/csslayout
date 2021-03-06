/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Stamp border">
            <Helmet>
                <meta name="description" content="Create stamp border with CSS" />
                <meta name="keywords" content="css radial gradient, css stamp border" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#ccc',
                                    backgroundImage: 'radial-gradient(#fff 50%, transparent 50%)',
                                    backgroundPosition: '-5px -5px',
                                    backgroundRepeat: 'repeat',
                                    backgroundSize: '10px 10px',
                                    height: '200px',
                                    padding: '5px',
                                    width: '200px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#ccc',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Background */
    background-color: #ccc;
    background-image: radial-gradient(#fff 50%, transparent 50%);
    background-position: -5px -5px;
    background-repeat: repeat;
    background-size: 10px 10px;

    /* Spacing */
    padding: 5px;
">
    <!-- Inner -->
    <div style="
        /* Background */
        background-color: #ccc;
    ">
        <!-- Content -->
        ...
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
