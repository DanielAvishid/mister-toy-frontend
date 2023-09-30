import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, showLogin } from "../store/actions/user.actions";
import { LoginSignup } from "./LoginSignup";

export function AppHeader() {

    const navigate = useNavigate()
    const isLoginShown = useSelector(storeState => storeState.userModule.isLoginShown)
    const user = useSelector(storeState => storeState.userModule.loggedinUser)

    async function onLogout() {
        try {
            await logout()
            console.log('ShowSuccsesMsg')
        } catch (err) {
            console.log('ShowErrorMsg')
        }
    }

    return (
        <div className="app-header-container main-layout full">
            <header className="app-header flex space-between">
                {isLoginShown && <LoginSignup />}
                <div className="flex align-center">
                    <div className="logo">
                        <h1 onClick={() => navigate('/')}>Mister Toy</h1>
                    </div>
                    <nav className="flex gap30">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/toy'>Toys</NavLink>
                        {user && user.isAdmin && <NavLink to='/dashboard'>Dashboard</NavLink>}
                    </nav>
                </div>
                <nav className="flex align-center gap30">
                    {user && <section className="user-info flex align-center justify-center">
                        <p>
                            {user.fullname}
                        </p>
                        <button className="logout-btn" onClick={onLogout}>Logout</button>
                    </section>}
                    {!user && <a onClick={(ev) => {
                        ev.preventDefault()
                        showLogin(isLoginShown)
                    }} href="#"><FiUser className="icon" />Account</a>}
                    <a href="#"><FiShoppingCart className="icon" />Cart</a>
                </nav>
            </header>
        </div>
    )
}