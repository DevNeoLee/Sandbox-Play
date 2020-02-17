import React, { Component } from 'react';
import axios from 'axios';

class CommentList extends Component {

    state = {
        comments : []
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/comments`)
            .then(res => {
                this.setState({
                    comments: res.data
                });
            });
    }

    render() {
        return (
          <div>
            <ul>
              <h3>Comment List</h3>
              {this.state.comments.map(comment => (
                <div>
                  <li>{comment.postId}</li>
                  <li>{comment.id}</li>
                  <li>{comment.email}</li>
                  <li>{comment.body}</li>
                </div>
              ))}
            </ul>
          </div>
        );
    }
}

export default CommentList;
