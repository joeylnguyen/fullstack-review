import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      count: 0
    }
    this.getRepos = this.getRepos.bind(this);
    this.addToRepos = this.addToRepos.bind(this);
    this.updateCount = this.updateCount.bind(this);
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: {username: term},
      success: () => console.log('Success!'),
      error: error => console.log(error)
    }).done(this.getRepos);
  }

  getRepos () {
    console.log(`Loading top repos...`);
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1128/repos',
      success: data => {
        this.addToRepos(data.repos);
        this.updateCount(data.count);
      },
      error: error => console.log(error)
    });
  }

  addToRepos (repos) {
    this.setState({
      repos: repos
    })
  }

  updateCount (count) {
    this.setState({
      count: count
    })
  }

  componentDidMount () {
    this.getRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos} count={this.state.count}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));