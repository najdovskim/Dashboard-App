function Filters() {
  return (
    <div className="mx-5 space-x-2">
      <select
        className="rounded-md border border-gray-700 px-1 py-1.5 text-gray-600"
        name="filter"
      >
        <option value="priority">Priority</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
      <select
        className="rounded-md border border-gray-700 px-1 py-1.5 text-gray-600"
        name="filter"
      >
        <option value="today">Today</option>
        <option value="Week">Week</option>
        <option value="Month">Month</option>
      </select>
    </div>
  );
}

export default Filters;
