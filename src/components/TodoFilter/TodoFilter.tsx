type Props = {
  setStatus: (status: string) => void;
  setQuery: (status: string) => void;
  query: string;
};

export const TodoFilter: React.FC<Props> = ({ query, setStatus, setQuery }) => {
  const handlerOnChangeStatus = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setStatus(event.target.value);
  };

  const handlerOnChangeQuery = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setQuery(event.target.value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select data-cy="statusSelect" onChange={handlerOnChangeStatus}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handlerOnChangeQuery}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>
        {query !== '' && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => {
                setQuery('');
              }}
            />
          </span>
        )}
      </p>
    </form>
  );
};
