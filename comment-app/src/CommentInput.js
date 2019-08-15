import React, { Component } from 'react';
class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = { username:'',comment:'' }
        this.handleInputUserName = this.handleInputUserName.bind(this)
        this.handlerInputComment = this.handlerInputComment.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(){
        const {username,comment} = this.state;
        console.log({username,comment})//传入父组件的props，让子组件能够调用父组件的方法，进而让父组件更新共享的数据，从而更新页面
        this.props.handleSubmit({username,comment})//这个handleSubmit由父组件来的,实际调用的是父组件的函数
        this.setState({comment:''})
    }
    handleInputUserName(e){
        this.setState({username:e.target.value})
    }
    handlerInputComment(e){
        this.setState({comment:e.target.value})
    }
    render() { 
        return ( 
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div>
                        <input  className='comment-field-input' value={this.state.username} onChange={this.handleInputUserName}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div>
                        <textarea className='comment-field-input' value={this.state.comment} onChange={this.handlerInputComment}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
         );
    }
}
 
export default CommentInput
