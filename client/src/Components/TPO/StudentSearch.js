import { useState } from "react";

// router
import { useNavigate } from "react-router-dom";

// MUI COmponents
import { Stack, TextField, InputAdornment, Button } from "@mui/material";

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
const StudentSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const SearchBar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSearch(e.target.value);
   // setTimeout({},100)
    if (e.target.value === "") navigate(`/tpo/edit`);
    if (!(e.target.value === "")) navigate(`/tpo/edit/${search}`);
  };
  return (
    <Stack spacing={1} direction="row" sx={{ width: "100%" }}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="text.secondary" fontSize="small" />
            </InputAdornment>
          ),
        }}
        fullWidth
        size="small"
        label="Search"
        placeholder="Student Name..."
        value={search}
        onInput={SearchBar}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            navigate(`/tpo/edit/${search}`);
          }
        }}
      />
      <Button
        size="small"
        sx={{ textTransform: "none" }}
        onClick={(e) => {
          navigate(`/tpo/edit/${search}`);
        }}
        variant="outlined"
      >
        Search
      </Button>
    </Stack>
  );
};
export default StudentSearch;
