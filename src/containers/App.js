import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import Header from '../components/Header.js';
import { useDispatch, useSelector } from 'react-redux'
import { setSearchField, requestRobots } from '../actions'
import './App.css';
import loader from '../loader.svg';

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
      <Header />
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        { 
        	isPending 
        	?
    	    <>
    	    	<h1 class="header">Loading...</h1>
   	 				<img class="loader" src={loader} alt="Loading"/>
					</>
        	:
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        }
      </Scroll>
    </div>
  );
}

export default App;