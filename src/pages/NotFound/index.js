import MainButton from "components/MainButton"
import styles from "./NotFound.module.css"
import erro404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Oops! Page not found.
                </h1>
                <p className={styles.paragrafo}>
                    Are you sure this is what you were looking for?
                </p>
                <p className={styles.paragrafo}>
                    Wait a few moments and reload the page or return to the home page.
                </p>
                <div className={styles.botaoContainer} onClick={() => navigate(-1)}>
                    <MainButton size="lg">Go back</MainButton>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt="A dog wearing glasses and dressing like a human"/>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NotFound