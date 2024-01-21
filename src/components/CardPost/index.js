import { Link } from "react-router-dom"
import styles from "./CardPost.module.css"
import MainButton from "components/MainButton"

const CardPost = ({post}) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`}/>
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <MainButton>Ler</MainButton>
            </div>
        </Link>
    )
}

export default CardPost