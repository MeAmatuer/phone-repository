import React from 'react';

const Header = function () {
    const headerStyle = { textAlign: 'center', background: '#000', color: '#fff', padding: 20, textTransform: "uppercase" };
    return (
        <div style={headerStyle}>
            Phone Directory
        </div>
    );
}
export default Header;