import React from 'react';

const FooterComponent = () => {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="col-12">
                    <div
                        className="row justify-content-center"
                        style={{
                            bottom: '0',
                            position: 'fixed',
                            color: 'black',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        <h5><b>QUOTES</b></h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterComponent;
