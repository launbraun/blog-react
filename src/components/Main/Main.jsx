import React from "react";
import Stories from "./Stories/Stories";
import {connect} from "react-redux";
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import Pagination from "./Pagination/Pagination";





class Main extends React.Component {

    render() {
        return (
                    <>
                    <Stories stories={this.props.stories}/>
                    <AddPost/>
                    <Posts posts={this.props.posts}/>
                    <Pagination/>
                    </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories.stories,
        posts: state.posts.posts
    }
}


export default connect(mapStateToProps, {})(Main)
