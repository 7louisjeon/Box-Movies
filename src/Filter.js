import React from "react";
import { Button } from "@material-ui/core";

function Filter({ name, Name, value, filterType, setFilterType }) {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        filterType !== name ? setFilterType(name) : setFilterType(null);
      }}
      style={{
        backgroundColor: value !== Name && "var(--clr-main1)",
        color: value !== Name && "var(--clr-main2)",
      }}
    >
      {value}
    </Button>
  );
}

export default Filter;
