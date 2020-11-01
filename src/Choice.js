import { Button } from "@material-ui/core";
import React from "react";

function Choice({ filterType, filterTypeString, choice, setFilter }) {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (filterType !== choice) {
          setFilter(choice);
        } else {
          setFilter(filterTypeString);
        }
        console.log(filterType);
      }}
      style={{
        backgroundColor: filterType == choice && "var(--clr-main1)",
        color: filterType == choice && "var(--clr-main2)",
      }}
    >
      {choice}
    </Button>
  );
}

export default Choice;
