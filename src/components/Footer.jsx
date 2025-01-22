export default function Footer() {
  //generate new year
  const year = new Date().getFullYear();
  return (
    <>
      <footer style={footerStyle}>
        <p>&copy; {year} DeBoots Dev. All rights reserved.</p>
      </footer>
    </>
  );
}

// inline style

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px 0',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  fontSize: '14px',
};
