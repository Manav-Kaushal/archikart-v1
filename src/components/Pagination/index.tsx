import React from "react";

type PaginationProps = {
  page: number;
  handlePageChange: (newPage: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, handlePageChange }) => {
  return (
    <div>
      <div className="flex justify-center mt-4">
        {page > 1 && (
          <button
            className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
            onClick={() => handlePageChange(page - 1)}
          >
            Prev
          </button>
        )}
        <button
          className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
          disabled
        >
          {page}
        </button>
        <button
          className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
