import React from 'react';
import _ from 'lodash';

const SearchBar = (props) => {
    var debouncedQuery = _.debounce(props.query, 500);
    return (
      <div>
        <form>
          <input type="search"
            placeholder="Search Artist"
            style={{marginTop: '50px', marginBottom: '20px'}}
            onKeyDown={(e) => {
              if (e.which == 13) {
                e.preventDefault();
              }
            }}
            onChange={(event) => {
              if (event.target.value.length){
                debouncedQuery(event.target.value)
              }
            }}
          />
        </form>
      </div>
    )
}

SearchBar.propTypes = {
  query: React.PropTypes.func
};

export default SearchBar;
