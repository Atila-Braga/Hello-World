import "./Post.css"
import styles from "./Post.module.css"
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import TemplatePost from "components/TemplatePost";
import ReactMarkdown from "react-markdown"
import NotFound from "pages/NotFound";
import DefaultPage from "components/DefaultPage";
import CardPost from "components/CardPost";

const Post = () => {
    const params = useParams();
    const post = posts.find(post => `${post.id}` === params.id)
    const recomendedPosts = posts.filter(post => `${post.id}` !== params.id).sort((a, b) => b.id - a.id).slice(0,4)

    if(!post)  {
        return <NotFound/>
    }

    return (
        <Routes>
            <Route path="*" element={<DefaultPage/>}>
                <Route index element={
                    <TemplatePost fotoCapa={`/assets/posts/${params.id}/capa.png`} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {recomendedPosts.map(post => <li key={post.id}><CardPost post={post}/></li>)}
                    </ul>
                    </TemplatePost>
                }/>
            </Route>
        </Routes>
    )
}

export default Post