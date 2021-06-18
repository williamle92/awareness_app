import React from "react";
import TextField from '@material-ui/core/TextField';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event)=>{
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onTermSubmit(this.state.term);

  };
  render() {
    return (
      <div className="search_bar ">
        <form onSubmit={this.onFormSubmit}  noValidate autoComplete="off" >
          <div className="field">
            <label> Video Search</label>
            <TextField id="filled-basic" label="Search videos" variant="filled" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
