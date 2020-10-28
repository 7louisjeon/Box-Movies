import { Button } from '@material-ui/core'
import React from 'react'

function Choice( {filterType, filterTypeString, choice, setFilter} ) {
  return (
    <Button variant='outlined' onClick={() => {filterType !== choice ? setFilter(choice) : setFilter(filterTypeString);}} style={{backgroundColor: filterType == choice && "red", color: filterType == choice && "black"}}>{choice}</Button>
  )
}

export default Choice
