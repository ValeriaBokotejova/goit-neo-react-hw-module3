import css from './SearchBox.module.css';

function SearchBox({ filter, setFilter }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        placeholder="Search contacts..."
      />
    </div>
  );
}

export default SearchBox;
