import React, { useContext, useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContext } from "../../../search-context";

export default function Search({ sx }) {
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setSearchText } = useContext(SearchContext);

  useEffect(() => {
    const delaySettingSearchTextUntilUserFinishTyping = setTimeout(() => {
      if (searchValue) setSearchText(searchValue);
    }, 1000);

    return () => clearTimeout(delaySettingSearchTextUntilUserFinishTyping);
  }, [searchValue, setSearchText]);

  return (
    <FormControl
      variant="outlined"
      sx={{
        ...sx,
        border: "2px solid white",
        borderRadius: "6px",
        width: { xs: "90%", lg: "45%" },
      }}
    >
      {!focused && (
        <InputLabel
          sx={{
            color: "white",
            fontFamily: "inherit",
            fontSize: "fontSize.sm",
            transform: "translate(14px, 10px) scale(1)",
          }}
          htmlFor="outlined-adornment-search"
        >
          What do you want to watch?
        </InputLabel>
      )}
      <OutlinedInput
        disableUnderline="true"
        id="outlined-adornment-search"
        type="search"
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          if (!e.target.value.trim()) setFocused(false);
        }}
        onChange={(e) => setSearchValue(e.target.value)}
        sx={{
          color: "white",
          "& .MuiInputBase-input, & .css-1delx66": { padding: "10px" },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <SearchIcon
                sx={{
                  color: "white",
                  fontSize: "fontSize.lg",
                }}
              />
            </IconButton>
          </InputAdornment>
        }
        label="What do you want to watch?"
      />
    </FormControl>
  );
}
