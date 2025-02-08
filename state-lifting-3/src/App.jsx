import { useState } from 'react';
import { foods, filterItems } from './components/data.jsx';

export default function FilterableList() {
  const [query, setQuery] = useState('');

  // Filter the list based on user input
  const filteredFoods = filterItems(foods, query);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <hr />
      <List items={filteredFoods} />
    </>
  );
}

function SearchBar({ query, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type to search..."
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.length > 0 ? (
          items.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">No results found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
