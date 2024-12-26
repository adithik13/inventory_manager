import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './images/food_friends.jpg';
import { useState } from 'react';

function App() {
  return (
      <Router>
          <div>
              <header>
                  <img src={logo} alt="Logo" style={{ width: '100px', marginBottom: '20px' }} />
                  <h1>Welcome to your Inventory!</h1>
              </header>
              <nav>
                  <Link to="/create-list">
                      <button>Create a New List</button>
                  </Link>
                  <br />
                  <Link to="/view-inventory">
                      <button>View Inventory</button>
                  </Link>
                  <br />
                  <Link to="/home-page">
                    <button>Home Page</button>
                  </Link>
                  <br />
              </nav>
              <Routes>
                  <Route path="/create-list" element={<CreateList />} />
                  <Route path="/view-inventory" element={<ViewInventory />} />
                  <Route path="/home-page" element={<HomePage />} />
              </Routes>
          </div>
      </Router>
  );
}

function CreateList() {
    // State to store the input value and the list of items
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    // Handle input changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handle adding an item to the list
    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]); // Add the new item to the list
            setInputValue(''); // Clear the input field
        }
    };

    return (
        <div>
            <h2>Create a New List</h2>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter an item"
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
              <button>Save List</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        
    );
}

function ViewInventory() {
    return <h2>View Inventory</h2>;
}

function HomePage() {
  return <h2>  </h2>;
}

export default App;
