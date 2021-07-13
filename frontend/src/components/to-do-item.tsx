import React from 'react'
// import { useState } from 'react'
import "../css/to-do-item.css"

export interface IToDoItemProps{
    // id: number
    date: Date | string | null
    title: string | null
    // complete: boolean
    changeComplete: () => void
    status: string | null
    itemColor: string 
    onDelete: () => void | null
    alert: ()=>void | null
}

// export default function toDoItem(props: IToDoItemProps) {
    
export default function toDoItem(props: IToDoItemProps) {
    
    return (
        // <div className="to-do-list-container">
        <div className="to-do-list-container">
            <div className={props.itemColor}>
               <div className="date">
                    {props.date}
                </div> 
                <div className="item-position-style ">
                    {props.title}
                </div>
                <div className="item-buttons-container">
                    <button className="item-buttons">Done</button>
                    <button onClick={props.changeComplete} className="item-buttons">{props.status}</button>
                    <button className="item-buttons">Edit</button>
                    <button className="item-buttons">Bin</button>
                    <button onClick={props.onDelete} className="item-buttons">Delete</button>
                    <button onClick={props.alert}>Alert</button>
                </div>
            </div>
        </div>
    )
}
