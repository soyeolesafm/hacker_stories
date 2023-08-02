
import  React from  'react';
import './App.css';





const App = () => {
  const stories = [
    {
      title : 'React',
      url : 'https://reactjs.org',
      author : 'Jordan Walke',
      num_comments : 3,
      points : 4,
      objectID : 0, 
    },
    {
      title : 'Redux',
      url : 'https://redux.js.org',
      author : 'Dan Abramov, Andrew Clark',
      num_comments : 2,
      points : 5,
      objectID : 1,
    },
  
  ]
  
  const handleSearch = event => {
    console.log(event.target.value);
  }
  return (
    <div>
      <h1> My hacker stories</h1>
      <Search onSearch = {handleSearch} />
      <hr/>
      <List list={stories} />
    </div>
  );

}
const Search = props => {
  const [searchTerm, setSearchTerm] = React.useState ('') 

  const handleChange = event => {
    setSearchTerm(event.target.value);
    props.onSearch(event)
  }

  return (
   <dice>
       <label htmlFor='search'>Search: </label>
      <input id='search' type='text' on onChange={handleChange} />
      
        <p>
          Searching for <strong> {searchTerm} </strong>
        </p>
   </dice>
  )
}

const List = (props) => (
  <ul>
    {props.list.map ((item) => (
    
    <li key= {item.objectID} > 
    <span>
      <a href={item.url}> {item.title} </a>
    </span>
    <span> {item.author} </span>
    <span> {item.num_comments} </span>
    <span> {item.points} </span>
    </li>
    
  ))}
    
  </ul>
  

) 


export default App;
