import React, { useState, useEffect, useRef } from 'react';

function Aside() {
    const [sideMenuVisible, setSideMenuVisible] = useState(true);
    const sideMenuRef = useRef(null);

    useEffect(() => {
        const menuBtn = document.getElementById('menu-btn');

        const handleMenuBtnClick = () => {
            setSideMenuVisible(prevVisible => !prevVisible);
        };

        if (menuBtn) {
            menuBtn.addEventListener('click', handleMenuBtnClick);
        }

        return () => {
            if (menuBtn) {
                menuBtn.removeEventListener('click', handleMenuBtnClick);
            }
        };
    }, []);

    return (
        <aside ref={sideMenuRef} className={sideMenuVisible ? 'visible' : 'hidden'}>
            <div className="top">
                <div className="logo">
                    <img src="./images/logo.png" alt="Logo" style={{ width: '100%' }} />
                    <h2>Shop<span className="danger">SYNC</span></h2>
                </div>
                <div className="close" id="close-btn" onClick={() => setSideMenuVisible(false)}>
                    <span className="material-symbols-sharp">close</span>
                </div>
            </div>
            <div className="sidebar">
                <a href="#">
                    <span className="material-symbols-sharp">grid_view</span>
                    <h3>Dashboard</h3>
                </a>
                <a href="#" className="active">
                    <span className="material-symbols-sharp">person_outline</span>
                    <h3>Customer</h3>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">receipt_long</span>
                    <h3>Orders</h3>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">insights</span>
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">mail_outline</span>
                    <h3>Messages</h3>
                    <span className="message-count">26</span>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">inventory</span>
                    <h3>Products</h3>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">report_gmailerrorred</span>
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">add</span>
                    <h3>Add Products</h3>
                </a>
                <a href="#">
                    <span className="material-symbols-sharp">logout</span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    );
}

export default Aside;
