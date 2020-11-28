import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItem(items);
      return;
    }
    const newItems = items.filter(( item) =>
      item.category === category)
      setMenuItem(newItems)
  }

  return(
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Vegan Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories filterItems={filterItems} />
      <Menu items={menuItems}/>
    </section>
  </main>

  )

}

export default App;