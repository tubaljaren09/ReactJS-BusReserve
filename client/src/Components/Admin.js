import React from 'react';

const Admin = () => {
    return(
        <div className="admin-main">
            <div className="admin-container">
                <form className="login-form">
                    <h1>Admin</h1>
                    <div className="content">
                        <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="content">
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="content">
                        <button>LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admin;