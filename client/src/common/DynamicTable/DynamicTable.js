import React, { useState, useMemo } from "react";
import Pagination from "common/Pagination/Pagination";

import './DynamicTable.css';

function DynamicTable({ data, config, className, pageSizeOptions = [5, 10, 20], enableFilter = false }) {
  const [filters, setFilters] = useState({});
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [page, setPage] = useState(1);

  console.log("dynamic table", data);

  const filteredData = useMemo(() => {
    return data?.filter(row =>
      config.columns.every(col => {
        const filterValue = filters[col.key];
        if (!filterValue) return true;
        const cellValue = String(col.render ? col.render(row) : row[col.key] ?? "");
        return cellValue.toLowerCase().includes(filterValue.toLowerCase());
      })
    );
  }, [data, config.columns, filters]);

  const pageCount = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const pagedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

  const setFilter = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setPage(1);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <div>
      <table className={`${className} dynamic-table`}>
        <thead>
          <tr>
            {config.columns.map((col) => (
              <th className="table-header-cell" key={col.key}>
                {col.label}
              </th>
            ))}
          </tr>
         { enableFilter && <tr>
            {config.columns.map((col) => (
              <td key={col.key} className="table-filter-cell">
                {col.filter ? (
                  <input
                    className="table-filter-input"
                    type="text"
                    value={filters[col.key] || ""}
                    onChange={e => setFilter(col.key, e.target.value)}
                    placeholder="Filter..."
                  />
                ) : null}
              </td>
            ))}
          </tr>
          }
        </thead>
        <tbody>
          {pagedData.length > 0 ? (
            pagedData.map((row, idx) => (
              <tr key={row?.id ?? idx}>
                {config.columns.map((col) => {
                  let value = col?.render ? col.render(row) : row[col?.key];
                  if (typeof value === 'object' && value !== null && !React.isValidElement(value)) {
                    value = JSON.stringify(value);
                  }
                  return <td key={col?.key}>{value}</td>;
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={config.columns.length} style={{ textAlign: "center" }}>
                No records to display.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="dynamic-table-controls">
        <span className="rows-per-page">
          Rows per page:{" "}
          <select className="table-page-size-select" value={pageSize} onChange={handlePageSizeChange}>
            {pageSizeOptions.map(sz => (
              <option key={sz} value={sz}>{sz}</option>
            ))}
          </select>
        </span>
        <Pagination
          currentPage={page}
          totalPages={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default DynamicTable;
