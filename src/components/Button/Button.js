import styles from "./Button.module.css";

const Button = () => {
    const handleClick = () => {
        // Handle click logic here
    };

    return (
        <div className={styles.center}>
            <button className={styles.button} onClick={handleClick}>
                לעוד פרטים
            </button>
        </div>
    );
};

export default Button;