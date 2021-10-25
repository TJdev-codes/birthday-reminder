import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  if (people.length === 0) {
    return (
      <main>
      <section className="container">
        <h3>
          {people.length} people have birthdays today!
        </h3>
        <p>No Reminders for Today</p>
      </section>
      </main>
    )
  } else {
  return (
    <main>
      <section className="container">
        <h3>
          {people.length} people have birthdays today!
        </h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          Clear All Reminders
        </button>
      </section>
    </main>
  )}
}

export default App;
