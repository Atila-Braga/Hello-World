import styles from "./Home.module.css"
import posts from "json/posts.json"
import CardPost from "components/CardPost"

const Inicio = () => {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <CardPost post={post}/>
                </li>
            ))}
        </ul>
    )
}

export default Inicio