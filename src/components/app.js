import React, {Component} from 'react';
import Nav from './Nav';
import PostList from './PostList';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>React simple starter</div>
                <Nav/>
                <PostList/>
            </div>
        );
    }
}
