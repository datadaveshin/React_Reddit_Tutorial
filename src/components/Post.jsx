import React, {Component} from 'react';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        let {postText} = this.props;
        return (
            <div className="red">{postText}</div>
        );
    }
}
