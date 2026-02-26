import image from "/src/assets/react.svg"
import styles from "/src/components/Card/Card.module.css"

export const Card = () => {
    
    return(
        <>
            <div className={styles.container}>
                <img className={styles.cardImage} src={image} alt="React log" />
                <h2>React_log</h2>
                <p>I am learning a React</p>
            </div>
        </>
    );
}