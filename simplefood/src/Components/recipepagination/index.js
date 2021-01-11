import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Wrapper } from "./style";

const RecipePagination = ({
  changePage,
  currentPage,
  numPerPage,
  totalData,
}) => {
  const numOfPages = Math.ceil(totalData / numPerPage);
  const pageNumbers = [];

  if (currentPage - 1 > 0) {
    pageNumbers.push(currentPage - 1);
  }
  pageNumbers.push(currentPage);
  if (currentPage + 1 <= numOfPages) {
    pageNumbers.push(currentPage + 1);
  }

  const renderPageNumbers = pageNumbers.map((pageNumber) => {
    return (
      <PaginationItem
        key={pageNumber}
        className={`${currentPage === pageNumber ? "active" : ""}`}
      >
        <PaginationLink
          className={`recipespagination-button ${
            currentPage === pageNumber ? "active" : ""
          }`}
          onClick={() => {
            changePage(pageNumber);
          }}
        >
          {pageNumber.toString()}
        </PaginationLink>
      </PaginationItem>
    );
  });

  if (totalData === 0) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <Wrapper>
      <div className="recipepagination-wrapper">
        <Pagination size="md">
          <PaginationItem className={`${currentPage === 1 ? "disabled" : ""}`}>
            <PaginationLink
              className={`recipespagination-button ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => {
                changePage(currentPage - 1);
              }}
              first
            />
          </PaginationItem>
          <PaginationItem
            className={`${currentPage <= 2 || numOfPages <= 2 ? "d-none" : ""}`}
            disabled
          >
            <PaginationLink
              className="recipespagination-button"
              onClick={() => {
                changePage(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={`${currentPage <= 2 || numOfPages <= 2 ? "d-none" : ""}`}
            disabled
          >
            <PaginationLink className="recipespagination-button disabled">
              ...
            </PaginationLink>
          </PaginationItem>
          {renderPageNumbers}
          <PaginationItem
            className={`${
              currentPage >= numOfPages - 1 || numOfPages <= 2 ? "d-none" : ""
            }`}
            disabled
          >
            <PaginationLink className="recipespagination-button disabled">
              ...
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={`${
              currentPage >= numOfPages - 1 || numOfPages <= 2 ? "d-none" : ""
            }`}
          >
            <PaginationLink
              className="recipespagination-button"
              onClick={() => {
                changePage(numOfPages);
              }}
            >
              {numOfPages}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem
            className={`${currentPage === numOfPages ? "disabled" : ""}`}
          >
            <PaginationLink
              className={`recipespagination-button ${
                currentPage === numOfPages ? "disabled" : ""
              }`}
              onClick={() => {
                changePage(currentPage + 1);
              }}
              last
            />
          </PaginationItem>
        </Pagination>
      </div>
    </Wrapper>
  );
};

export default RecipePagination;
