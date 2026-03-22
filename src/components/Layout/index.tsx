import {Outlet, NavLink} from "react-router-dom";


export const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to='/' className={({isActive}) => isActive ? 'active' : ''}>Главная</NavLink>
                    <NavLink to='/favorites' className={({isActive}) => isActive ? 'active' : ''}>Избранное</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}