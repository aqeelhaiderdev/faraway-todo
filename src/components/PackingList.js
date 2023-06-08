import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sort, setSort] = useState("input");

  console.log(items);

  let sortedItems;

  if (sort === "input") sortedItems = items;

  if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sort === "packed") {
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  }

  const clearListHandler = () => {
    onClearList();
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>

        <button onClick={clearListHandler}>Clear List</button>
      </div>
    </div>
  );
}
