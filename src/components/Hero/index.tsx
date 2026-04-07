import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Cinema</h1>
            <p className={styles.quote}>Watch. Feel. Dream.</p>
        </div>
    );
};

export default Hero;