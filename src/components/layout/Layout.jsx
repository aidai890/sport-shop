import React, { useState } from 'react';
import Header from '../header/Header';
import SignUp from '../signUp/SignUp';


function Layout() {
    const [isVisible, setIsVisible] = useState(false);
    const changeVisible = () => {
        setIsVisible(true);
    };
    return (
        <div>
            <div>
                <Header changeVisible={changeVisible} />
            </div>
            {isVisible && <SignUp setIsVisible={setIsVisible} />}
        </div>
    );
}

export default Layout;

