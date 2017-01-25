import React, {Component} from 'react';
import Post from './Post';
import getFrontPage from '../api/RedditAPI';

export default class PostList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
                'post 1',
                'post 2',
                'post 3',
                'post 4',
                'post 5',
                'post 6'
            ]
        };

        getFrontPage().then((redditData) => {
            console.log(redditData);
        })
    }

    renderPosts() {
        var key = 0;
        var posts = this.state.posts;

        var postComponents = posts.map((post) => {
            return (<Post key={key++} postText={post}/>)
        })

        return postComponents
    }

    render() {
        return (
            <div>
                <p>This is the post list component</p>
                {this.renderPosts()}
            </div>
        );
    }
}
