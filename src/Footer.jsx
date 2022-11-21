function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {date} Willy Kwizera</p>
    </footer>
  );
}

export default Footer;
