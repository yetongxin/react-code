import React from 'react'
const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]
function ListItem(props){
    return (
        <div>
            <div>用户名：{props.user.username}</div>
            <div>年龄：{props.user.age}</div>
            <div>性别：{props.user.gender}</div>
        </div>
    )
}
class ListTest extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            {
                users.map(user=>{
                    return <ListItem user={user}/>
                })
            }
            </div>
        )
    }
}
export default ListTest