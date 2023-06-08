export default function Stats({ item }) {
  if (item.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to you packing list 🚀</em>
      </p>
    );
  }

  const totalItems = item.length;
  const packedItems = item.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🚀"
          : `👜 You have ${totalItems} items on your list, and you already packed ${packedItems}(${percentage}%)`}
      </em>
    </footer>
  );
}
