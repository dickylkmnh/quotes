import React from 'react';
import { Tag } from 'antd';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

const NavbarComponent = (props) => {
    const { data } = props;
    console.log([data]);
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/payment">
                        <b className="navbar-brand"><b style={{ color: 'white' }}>PAYQU <Tag color="green">Rp. 20.000</Tag></b></b>
                    </a>
                    <form className="d-flex">
                        <Avatar label="A" className="p-mr-2" size="large" shape="circle" style={{ background: 'white' }} />
                    </form>
                </div>
            </nav>
        </>
    );
}

export default NavbarComponent;
