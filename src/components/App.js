import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const deleteItemHandler = (id) => {
    setItems((currentItem) => currentItem.filter((item) => item.id !== id));
  };

  const updateItemHandler = (id) => {
    setItems((currentItem) =>
      currentItem.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearListHandler = () => {
    const confirm = window.confirm("Are you sure to clear the list?");
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onGetItem={addItemHandler} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onToggleItem={updateItemHandler}
        onClearList={clearListHandler}
      />
      <Stats item={items} />
    </div>
  );
}

export default App;
