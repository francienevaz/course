import React, { useState, useEffect } from "react";
import './Todo.css';
import List from "./components/List";
import TodoForm from "./components/TodoForm";
import Item from "./components/Item";
import Modal from "./components/Modal";

const SAVED_ITEMS = 'savedItems';  // key for local storage

function Todo(){

    const [showModal, setShowModal] = useState(false);

    const  [items, setItems] = useState([]);

    useEffect(()=>{
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        
        if(savedItems){
            setItems(savedItems);
        }
    },[]);

    useEffect(()=> {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text){

        let item = new Item(text);

         setItems([...items, item]);
         onHideModal();
    }

    function onItemDeleted(item) {
        
        let filteredItems = items.filter(it=>it.id !== item.id);
        
        setItems(filteredItems);
    }

    function onDone(item) {

        let updatedItems = items.map(it => {
            if(it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);

    }

    function onHideModal (){
        setShowModal(false);
    }

    return(
        <div className="container">
            <header className="header">
               <h1>Todo with React JS</h1> <button onClick={()=>{ setShowModal(true)}} className="addBtn">+</button>
            </header>
            
            {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>

        </div>
    )
}

export default Todo;