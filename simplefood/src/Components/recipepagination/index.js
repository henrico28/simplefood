import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Wrapper } from "./style";

const RecipePagination = (props) => {
  return (
    <Wrapper>
      <div className="recipepagination-wrapper">
        <Pagination size="md">
          <PaginationItem disabled>
            <PaginationLink
              className="recipespagination-button disabled"
              first
            />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink className="recipespagination-button active">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="recipespagination-button">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="recipespagination-button">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink className="recipespagination-button disabled">
              ...
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="recipespagination-button">
              100
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="recipespagination-button" last />
          </PaginationItem>
        </Pagination>
      </div>
    </Wrapper>
  );
};

export default RecipePagination;
