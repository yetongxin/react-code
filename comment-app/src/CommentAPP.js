import React, { Component } from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentAPP extends Component {
    constructor(props) {
        super(props);
        this.state = { comments:[] }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(comment){
        // console.log(comment)
        if(!comment)    return
        if(!comment.username)   return alert('请输入用户名')
        if(!comment.comment)    return alert('请输入内容')
        this.state.comments.push(comment);
        this.setState({comments:this.state.comments})
    }
    render() { 
        return (
            <div className='wrapper'>
                <CommentInput handleSubmit={this.handleSubmit}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}
export default CommentAPP;
