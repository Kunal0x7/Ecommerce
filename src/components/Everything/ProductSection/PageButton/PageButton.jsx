export default function ProductButton({ id, children, onClick }) {
  return (
    <button id ={id} className="pageButton" onClick={onClick}>
      {children}
    </button>
  );
}