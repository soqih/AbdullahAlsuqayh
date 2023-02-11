import Blog from "../../components/blog/Blog";
import Bubble from "../../components/bubble/Bubble";
import Project from "../../components/project/Project";
const Home = () => {



    return (
        <div className="home">
            {<Bubble />}
            {<Project />}
            {<Blog />}
        </div>
    );
}

export default Home;