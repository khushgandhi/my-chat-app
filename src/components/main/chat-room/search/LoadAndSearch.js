import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
export default function LoadAndSearch(props) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  //todo -: load the messages from api call 
  useEffect(() => {
    setOptions([
      { name: "kuldeep", id: 1 },
      { name: "divya", id: 2 },
      { name: "khush", id: 3 },
    ]);
  }, []);
  return (
    <div>
      <Autocomplete
        options={options}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Select participants" />
        )}
        filterOptions={(options, input) => {
          return options.filter(
            (option) => option.name.indexOf(input.inputValue) !== -1
          );
        }}
        onOpen={()=>{
            setLoading(true);
        }}
        onClose={()=>{
            setLoading(false);
        }}
      />
    </div>
  );
}
