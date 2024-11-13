import React, { useState, useEffect, useRef } from 'react';

function Right() {
    const menuBtn = useRef(null);
    const themeToggler = useRef(null);

    useEffect(() => {
        const handleThemeTogglerClick = () => {
            document.body.classList.toggle('dark-theme-variables');
            if (themeToggler.current) {
                themeToggler.current.querySelector('span:nth-child(1)').classList.toggle('active');
                themeToggler.current.querySelector('span:nth-child(2)').classList.toggle('active');
            }
        };

        if (themeToggler.current) {
            themeToggler.current.addEventListener('click', handleThemeTogglerClick);
        }

        return () => {
            if (themeToggler.current) {
                themeToggler.current.removeEventListener('click', handleThemeTogglerClick);
            }
        };
    }, []);

    return (
        <div className="right">
            <div className="top">
                <button id="menu-btn" ref={menuBtn}>
                    <span className="material-symbols-sharp">menu</span>
                </button>
                <div className="theme-toggler" ref={themeToggler}>
                    <span className="material-symbols-sharp active">light_mode</span>
                    <span className="material-symbols-sharp">dark_mode</span>
                </div>
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Daniel</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src="./images/profile-1.jpg" alt="Profile" />
                    </div>
                </div>
            </div>

            <div className="recent-updates">
                <h2>Recent Updates</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            <img src="images/profile-2.jpg" alt="Profile" />
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="images/profile-3.jpg" alt="Profile" />
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            <img src="images/profile-4.jpg" alt="Profile" />
                        </div>
                        <div className="message">
                            <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                            <small className="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sales-analytics">
                <h2>Sales Analytics</h2>
                <div className="item online">
                    <div className="icons">
                        <span className="material-symbols-sharp">shopping_cart</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>ONLINE ORDERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="success">+39%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                <div className="item offline">
                    <div className="icons">
                        <span className="material-symbols-sharp">local_mall</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>OFFLINE ORDERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="danger">-17%</h5>
                        <h3>3849</h3>
                    </div>
                </div>
                <div className="item customers">
                    <div className="icons">
                        <span className="material-symbols-sharp">person</span>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>NEW CUSTOMERS</h3>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                        <h5 className="success">+25%</h5>
                        <h3>849</h3>
                    </div>
                </div>
                <div className="item add-products">
                    <div>
                        <span className="material-symbols-sharp">add</span>
                        <h3>Add Product</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;
