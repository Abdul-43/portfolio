import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-custom">
                <p>
                    Designed and Developed by Abdul Rahman
                </p>
            </div>
        </footer>
    );
}

export default Footer;
