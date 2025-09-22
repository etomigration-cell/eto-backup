import React from "react";
import './DynamicDetailsTable.css';

function DynamicDetailsTable({ detail, columnsPerRow = 2, fieldLabels = {} }) {
  if (!detail) return null;

  // Build entries from fieldLabels, using detail values
  const entries = Object.keys(fieldLabels)
    .map((key) => [key, detail[key]])
    .filter(([, value]) =>
      value !== null && value !== undefined && value !== "" && value !== "null"
    );

  // Dynamically group into N label/value pairs per row
  const pairsPerRow = columnsPerRow;
  const rows = [];
  for (let i = 0; i < entries.length; i += pairsPerRow) {
    rows.push(entries.slice(i, i + pairsPerRow));
  }

  return (
    <div className="dt-table-outer">
      <table className="dt-table">
        <tbody>
          {rows.map((cells, ridx) => (
            <tr key={ridx} className={ridx % 2 === 0 ? "dt-table-row even" : "dt-table-row odd"}>
              {cells.map(([key, value]) => (
                <React.Fragment key={key}>
                  <td className="dt-label-td">{fieldLabels[key]}</td>
                  <td className="dt-value-td">{value}</td>
                </React.Fragment>
              ))}
              {/* Fill blank cells in last row if short */}
              {[...Array(pairsPerRow - cells.length)].map((_, idx) => (
                <React.Fragment key={`blank${idx}`}>
                  <td className="dt-label-td"></td>
                  <td className="dt-value-td"></td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default DynamicDetailsTable;
