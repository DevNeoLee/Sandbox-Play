import React, { Component } from 'react';
import axios from 'axios';

class PictureList extends Component {
   state = {
       pictures : []
   }

   componentDidMount() {
       axios.get(`http://jsonplaceholder.typicode.com/photos`).then(res => {
         this.setState({
           pictures: res.data
         });
       });
   }
    render() {
        return (
          <div>
            <ul>
              <h3>Picture List</h3>
              {this.state.pictures.map(picture => (
                <div key={picture.id}>
                    <li>{picture.title}</li>
                  <img key={picture.id} src={picture.thumbnailUrl} />
                </div>
              ))}
            </ul>
          </div>
        );
    }
}

export default PictureList;
