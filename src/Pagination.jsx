import React from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
function Pagination(props) {
    const [itemOffset, setItemOffset] = useState(0);

    
    const endOffset = itemOffset + props.itemsPerPage;
    
    const currentItems = props.items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.items.length / props.itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected *props. itemsPerPage) %  props.items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  return (
    <div>
        <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    


    </div>
  )
}

export default Pagination