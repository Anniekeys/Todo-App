import { useState } from 'react';
import './Todo.css'; 

function Todo() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

function addItem() {
    if (newItem !== "") {
        setItems([...items, newItem]);
        setNewItem("");
    }
}
function deleteItem(index){
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
}

    return (
    <div className="todo-container" id="root">
    <h1>Todo List</h1>
    <div className="todo-input">
    <input
        onChange={event => setNewItem(event.target.value)}
        value={newItem}
        type="text"
        placeholder="Add an Item"
    />
    <button onClick={addItem}>Add</button>
    </div>
    <ul className="todo-list">
        {items.map((item, index) => (
        <li key={index}> {item}
            <button onClick={() => deleteItem(index)}>X</button>
        </li>
        ))}
    </ul>
    </div>
    );
}

export default Todo;
