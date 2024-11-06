function Button({ children, type }) {
  const base =
    'rounded-md border border-gray-700 bg-white px-2.5 py-1 text-gray-500 font-semibold';
  const styles = {
    primary: base + ' px-2 py-1 md:px-2.5 md:py-1.5',
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
