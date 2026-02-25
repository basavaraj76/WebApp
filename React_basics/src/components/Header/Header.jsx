import styles from "/src/components/Header/Header.module.css"

function Header(){

    return(
        <>
            <h1>My First Web sit using React</h1>
            <nav>
                <ul className={styles.menu}>
                    <li><a className={styles.menuItem} href="#">Home</a></li>
                    <li><a className={styles.menuItem} href="#">Contact</a></li>
                    <li><a className={styles.menuItem} href="#">About</a></li>
                </ul>
            </nav>
        </>
    );
}
export default Header