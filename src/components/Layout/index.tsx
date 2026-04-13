import { Outlet, NavLink } from "react-router-dom";
import Hero from "../Hero";
import styles from './Layout.module.css';

export const Layout = () => {
    return (
        <div>
            <Hero />
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? styles.active : ''}
                >
                    {({ isActive }) => (
                        <>
                            Home
                            {isActive && <img src="/popcorn.svg" alt="popcorn" className={styles.popcornIcon} />}
                        </>
                    )}
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({ isActive }) => isActive ? styles.active : ''}
                >
                    {({ isActive }) => (
                        <>
                            Favorites
                            {isActive && <img src="/popcorn.svg" alt="popcorn" className={styles.popcornIcon} />}
                        </>
                    )}
                </NavLink>
            </nav>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};