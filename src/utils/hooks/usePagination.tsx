import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Pagination from "@components/Pagination";
import React from "react";

type PaginationProps = {
  limit: number;
  preData?: any;
  shouldFetchData?: boolean;
  apiEndpoint?: string;
};

const usePagination = ({
  limit,
  preData,
  shouldFetchData,
  apiEndpoint,
}: PaginationProps) => {
  const [data, setData] = useState<any>(preData || []);
  const [page, setPage] = useState(1);
  const router = useRouter();

  const fetchData = async (page: number) => {
    const skip = (page - 1) * limit;
    const { data: newData } = await axios.get<any>(
      `${apiEndpoint}?limit=${limit}&skip=${skip}`
    );
    setData(newData);
  };

  useEffect(() => {
    const { query } = router;
    const pageParam = Number(query.page) || 1;
    setPage(pageParam);
  }, [router]);

  useEffect(() => {
    if (shouldFetchData) {
      fetchData(page);
    }
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`?page=${newPage}`);
  };

  const paginationComponent = (
    <Pagination page={page} handlePageChange={handlePageChange} />
  );

  return { data, page, handlePageChange, paginationComponent };
};

export default usePagination;
