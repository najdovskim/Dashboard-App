function Span({ children, type }) {
  if (children === 'High') {
    return (
      <span className="mb-2 rounded-md bg-red-100 px-1.5 py-0.5 text-base font-semibold text-red-600">
        {children}
      </span>
    );
  }

  if (children === 'Low') {
    return (
      <span className="mb-2 rounded-md bg-orange-100 px-1.5 py-0.5 text-base font-semibold text-orange-600">
        {children}
      </span>
    );
  }

  if (children === 'Med') {
    return (
      <span className="mb-2 rounded-md bg-blue-100 px-1.5 py-0.5 text-base font-semibold text-blue-600">
        {children}
      </span>
    );
  }

  if (children === 'Completed') {
    return (
      <span className="mb-2 rounded-md bg-green-100 px-1.5 py-0.5 text-base font-semibold text-green-600">
        {children}
      </span>
    );
  }

  return (
    <span className="mb-2 rounded-md bg-red-100 px-1 py-0.5 text-base font-semibold text-red-600">
      {children}
    </span>
  );
}

export default Span;
