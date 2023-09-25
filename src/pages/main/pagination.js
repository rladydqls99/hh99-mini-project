import React from "react";
import { PageUl, PageLi, PageSpan } from "./styles";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const lastIndex = Math.ceil(totalPosts / postsPerPage);
  const firstPage = Math.floor((currentPage - 1) / 5) * 5 + 1;
  const lastPage = Math.min(firstPage + 4, lastIndex);

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          <PageLi>
            <PageSpan onClick={() => paginate(1)}>{"<<"}</PageSpan>
          </PageLi>
          <PageLi>
            <PageSpan onClick={() => paginate(Math.max(1, currentPage - 1))}>
              ◁
            </PageSpan>
          </PageLi>
          {pageNumbers.slice(firstPage - 1, lastPage).map((number) => (
            <PageLi key={number}>
              <PageSpan onClick={() => paginate(number)}>{number}</PageSpan>
            </PageLi>
          ))}
          <PageLi>
            <PageSpan
              onClick={() => paginate(Math.min(lastIndex, currentPage + 1))}
            >
              ▷
            </PageSpan>
          </PageLi>
          <PageLi>
            <PageSpan onClick={() => paginate(lastIndex)}>{">>"}</PageSpan>
          </PageLi>
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;
