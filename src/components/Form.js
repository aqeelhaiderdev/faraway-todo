import { useState } from "react";

export default function Form({ onGetItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onGetItem(newItem);

    setDescription("");
    setQuantity("");
  };

  return (
    <form className="add-form" onSubmit={formSubmitHandler}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="item..."
      />
      <button>Add</button>
    </form>
  );
}
