import React from 'react'
import { IItem } from '../../types/todo'


interface IProps {
    item: IItem
    onRemoveTodo: (id:string) => void
}
const Todo:React.FC<IProps> = ({onRemoveTodo, item}) => {
        return(
            <li >
                <p>{item.title}</p>
                <p>{item.salary}</p>
                <button onClick={() => onRemoveTodo(item.id)}>Удалить</button>
            </li>
        )
}

export default Todo