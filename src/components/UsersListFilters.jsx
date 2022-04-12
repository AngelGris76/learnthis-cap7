const UserListForm = ({
  search,
  setSearch,
  activeFilter,
  setActiveFilter,
  order,
  setOrder,
}) => {
  return (
    <form>
      <input
        type='text'
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
      />

      <label>
        <span>Avtive</span>
        <input
          type='checkbox'
          checked={activeFilter}
          onChange={(ev) => {
            setActiveFilter(ev.target.checked);
          }}
        />
      </label>
      <select
        value={order}
        onChange={(ev) => {
          setOrder(Number(ev.target.value));
        }}
      >
        <option value={0}>Por defecto</option>
        <option value={1}>En orden</option>
      </select>
    </form>
  );
};

export default UserListForm;
