/* eslint-disable react/prop-types */
import './QuoteButton.css';

export default function QuoteButton({ onSelect }) {
  return (
    <button className="quote-btn" onClick={onSelect}>
      Generate Quote
    </button>
  );
}
