import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
function AdvancedExample(props) {
  const [page, setpage] = useState(1);
  return (
    <Pagination>
      {/* <Pagination.First /> */}
      <Pagination.Prev
        onClick={(e) => {
          if (page > 1) {
            setpage(page - 1);
            props.datafromPagination(page);
          } else {
            alert("You are on the first page");
          }
        }}
      >
        Previous Page
      </Pagination.Prev>
      {/* <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next
        onClick={(e) => {
          if (page < 8) {
            setpage(page + 1);
            props.datafromPagination(page);
          } else {
            alert("You are on the last page");
            setpage(page - 1);
          }
        }}
      >
        {" "}
        Next Page
      </Pagination.Next>
      {/* <Pagination.Last /> */}
    </Pagination>
  );
}
export default AdvancedExample;
