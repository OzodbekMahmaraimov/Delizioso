import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`py-3 px-5 rounded-xl ${
              i === currentPage ? "bg-[#FF8A00] text-white" : "bg-[#FFE6D6]"
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          className={`py-3 px-5 rounded-xl ${
            1 === currentPage ? "bg-[#FF8A00] text-white" : "bg-[#FFE6D6]"
          }`}
          onClick={() => handlePageClick(1)}
        >
          1
        </button>
      );

      if (currentPage > 3) {
        pages.push(
          <span
            key="start-dots"
            className="text-xl cursor-pointer inline-block text-[#B7A28B]"
          >
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            className={`py-3 px-5 rounded-xl ${
              i === currentPage ? "bg-[#FF8A00] text-white" : "bg-[#FFE6D6]"
            }`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span
            key="end-dots"
            className="text-xl cursor-pointer inline-block text-[#B7A28B]"
          >
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          className={`py-3 px-5 rounded-xl ${
            totalPages === currentPage
              ? "bg-[#FF8A00] text-white"
              : "bg-[#FFE6D6]"
          }`}
          onClick={() => handlePageClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="py-10 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
      <button
        className="p-4 bg-[#311F09] rounded-xl mb-3 md:mb-0 md:mr-2"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft className="text-xl" color="white" />
      </button>
      <div className="text-xl text-[#FF8A00] flex gap-3">
        {renderPageNumbers()}
      </div>
      <button
        className="p-4 bg-[#311F09] rounded-xl mt-3 md:mt-0 md:ml-2"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight className="text-xl" color="white" />
      </button>
    </div>
  );
};

export default Pagination;
