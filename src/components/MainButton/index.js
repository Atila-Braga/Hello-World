import styles from "./MainButton.module.css"

const MainButton = ({children, size}) => {
    return (
        <button className={`${styles.botaoPrincipal} ${styles[size]}`}>{children}</button>
    )
}

export default MainButton