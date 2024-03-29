import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Banner from './Banner'
import items from './data';

const allCategories =['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
    <Banner/>
    <section className="menu section">
      <div className="title">
        <h2>Vegan Menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems}/>
    </section>
  </main>

  )

}

export default App;
