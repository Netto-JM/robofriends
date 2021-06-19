import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import { useDispatch, useSelector } from 'react-redux'
import { setSearchField, requestRobots } from '../actions'
import './App.css';

function App() {

	const dispatch = useDispatch() 
  const { searchField } = useSelector(
    (state) => state.searchRobots
	)

	const { robots, isPending, error } = useSelector(
    (state) => state.requestRobots
	)

	const onRequestRobots = () => {
    dispatch(requestRobots())
 	}

	const onSearchChange = (event) => {
		dispatch(setSearchField(event.target.value))
	}

	useEffect(() => {
		onRequestRobots()
	}, []);

	const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
	return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        { isPending ? <h1>Loading</h1> :
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        }
      </Scroll>
    </div>
  );
}

export default App;