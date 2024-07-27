import React from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled('div')({
  position: 'relative',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 'fit-content',
  height: 'fit-content',
});

const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  margin: 'auto',
  top: 0,
  right: 0,
  bottom: 0,
  left: -3,
  width: 35,
  height: 35,
  borderRadius: '50%',
  transition: 'all 0.5s',
  zIndex: 4,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));

const InputContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: 50,
  height: 35,
  transition: 'all 0.5s',
  '&:focus-within': {
    width: 190,
  },
});

const InputIcon = styled(SearchIcon)(({ theme }) => ({
  position: 'absolute',
  left: 10,
  zIndex: 6,
  pointerEvents: 'none',
  color: 'white',
  
}));

const Input = styled('input')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  paddingLeft: 40,
  fontSize:12,
  fontWeight : 'normal',

  outline: 'none',
  border: 'none',
  background: 'black',
  color: 'white',
  transition: 'all 0.5s',
  opacity: 0,
  zIndex: 5,
  cursor: 'pointer',
  '&:focus': {
    opacity: 1,
    cursor: 'text',
  },
  '&:focus + div': {
    transform: 'scale(0.1)',
    background: 'transparent',
    boxShadow: 'none',
  },
  '&::placeholder': {
    margin: 'auto',
    color: 'white',
    fontSize:12,
    opacity: 0.5,
  },
}));

const SearchComponent: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <InputIcon />
        <Input type="text" placeholder="Search in Your Library" />
        <Search />
      </InputContainer>
    </Container>
  );
};

export const ExpandableSearchBar: React.FC = () => {
  return (
    <Grid item xs={9}>
      <SearchComponent />
    </Grid>
  );
};

export default ExpandableSearchBar;
