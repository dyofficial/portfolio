import { Search } from '@material-ui/icons';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import './Search.css';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      {/* <form action="/" method="get" className="search">
        <input type="text" id="header-search" placeholder="Search projects and skills" name="s" />
        <button type="submit">
          <Search />
        </button>
      </form> */}

      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Portfolio"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
