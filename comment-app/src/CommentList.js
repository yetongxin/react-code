import React, { Component } from 'react';
import Comment from './Comment'
let comments = [
    {username: 'Jerry', content: 'Hello'},
    {username: 'Tomy', content: 'World'},
    {username: 'Lucy', content: 'Good'}
  ]
class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(){
        return (
        <div>
            {this.props.comments.map((c,i)=>{return <Comment comment={c} key={i}/>})}
        </div>
        )
    }
}
 
export default CommentList;