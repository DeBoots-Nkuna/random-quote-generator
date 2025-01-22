/* eslint-disable react/prop-types */
const QuoteCard = ({ quote, author }) => {
  return (
    <>
      <p>&quot;{quote}&quot;</p>
      <h5>{author}</h5>
    </>
  );
};

export default QuoteCard;
