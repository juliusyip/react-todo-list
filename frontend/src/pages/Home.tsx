import React from 'react'
import ToDoItem from '../components/to-do-item'
// import component 第一個字一定要大揩
import SearchBar from '../components/SearchBar';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useState } from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

export default function Home() {
    //functions & variables
    
    
    const toggle = () => setModal(!modal); //turn the boolean other way round
    const nowDate = new Date().toISOString().slice(0,10)
    function addToDoBtn(){
        toggle()
        addToDo()
    }

    // function addToDo(){
    //     setToDo(toDo ? toDo.concat([
    //         // {id:1, date: nowDate, title: addTitle, complete: false}
    //         {date: nowDate, title: addTitle, complete: false}
    //     ]): null)
        
    // }

    function addToDo(){
        setToDo(toDo.concat([
            // {id:1, date: nowDate, title: addTitle, complete: false}
            {date: nowDate, title: addTitle, complete: false}
        ]))
        
    }

    function clearAllToDos(){
        setToDo([])
    }
    // function changeComplete(){
    //     // setToDo(toDo.concat([
    //     //     {date: nowDate, title: addTitle, complete: complete}
    //     // ]))
    //     setComplete(!complete)
    // }

  

    // const checkIsTick = () => setTick(!tick);
    // const changeComplete = () => setComplete(!complete)

    // const [toDo, setToDO] = useState<{
    //     date: Date | string
    //     title: string | null}[]>([])
    // const [toDo, setToDo] = useState<{date: string, title:string, complete: boolean}[] | null>([
    
    const [toDo, setToDo] = useState([
        // { id: 1, date: nowDate, title:"AAA", complete: true},
        // { id: 2, date: nowDate, title:"BBB", complete: true},
        // { id: 3, date: nowDate, title:"CCC", complete: false},
        { date: nowDate, title:"AAA", complete: true},
        { date: nowDate, title:"BBB", complete: true},
        { date: nowDate, title:"CCC", complete: false},
    ])
    const [modal, setModal] = useState(false);
    const [addTitle, setAddTitle] = useState("")
    // const [tick, setTick] = useState(false)
    // const [complete, setComplete] = useState(false)

    // console.log(toDo);
    // console.log(complete)
    
    
    return (
        <div>
            <div className="page-header">TODO</div> 
            <button onClick={clearAllToDos}>Clear</button>
            <Draggable>
            <div>I can now be moved around!</div>
            </Draggable>
            <SearchBar/>
            
            { toDo ?
            toDo.map((post, id) => (
                <div key={id}> 
                <ToDoItem 
                    // id={post.id}
                    date={post.date} 
                    title={post.title} 
                    // complete={post.complete}
                    // changeComplete={()=>{setComplete(!complete)}}
                    changeComplete={()=>{setToDo(toDo.map(aPost =>{
                        if(aPost != post ){
                            return aPost
                        }else{
                            return{
                                ...aPost,
                                complete: !post.complete
                            }
                        }
                    }))}}
                    // isTick={() => setTick(!tick)} 
                    // isTick={()=>{
                    //     setTick(!tick)
                    // }}

                    status={post.complete === false  ? "Tick" : "XXX" }
                    itemColor={post.complete === false  ? "to-do-items" : "completed-item"}
                    onDelete={()=>{setToDo (toDo.filter(deletePost => deletePost !== post))}}
                    alert={()=>{alert(post.title)}}
                /> 
                </div>
            )): []}
        
            
           <div className="add-todo-btn-container">
            <Button className="add-todo-item-btn" onClick={toggle}>
                +
            </Button>
           </div>
           <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader>Add a to-do item</ModalHeader>
                <ModalBody>
                Title: <input onChange={(event)=>{setAddTitle(event.currentTarget.value)}}></input>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={addToDoBtn}>Save</Button>
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

