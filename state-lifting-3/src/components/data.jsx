export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(query)
  );
}

export const foods = [
  {
    id: 0,
    name: 'Sushi',
    description: 'Sushi is a traditional Japanese dish of prepared vinegared rice.'
  },
  {
    id: 1,
    name: 'Dal',
    description: 'Dal is a lentil soup commonly cooked with onions, tomatoes, and spices.'
  },
  {
    id: 2,
    name: 'Pierogi',
    description: 'Pierogi are dumplings filled with savory or sweet ingredients and boiled or fried.'
  },
  {
    id: 3,
    name: 'Shish kebab',
    description: 'Shish kebab is a popular grilled skewer dish consisting of marinated meat chunks.'
  },
  {
    id: 4,
    name: 'Dim sum',
    description: 'Dim sum is a variety of small Cantonese dishes typically enjoyed at breakfast or lunch.'
  }
];
