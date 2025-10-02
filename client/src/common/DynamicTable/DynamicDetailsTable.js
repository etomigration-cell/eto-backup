import React from "react";
import './DynamicDetailsTable.css';

function DynamicDetailsTable({ detail, columnsPerRow = 2, fieldLabels = {}, alwaysShow = [] }) {
  if (!detail) return null;

  const entries = Object.keys(fieldLabels)
  .map((key) => [
    key,
    detail[key] == null || detail[key] === "" || detail[key] === "null" ? "" : detail[key]
  ])
  .filter(([key, value]) =>
    alwaysShow?.includes(key) || value !== ""
  );

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
              {cells.map(([key, value]) => {
                // Support both string and {label, type}
                const config = typeof fieldLabels[key] === "string"
                  ? { label: fieldLabels[key] }
                  : fieldLabels[key];

                return (
                  <React.Fragment key={key}>
                    <td className="dt-label-td">{config.label}</td>
                    <td className="dt-value-td">
                      {config.type === "textarea" ?
                        <div className="dt-textarea-cell">{value}</div>
                        :
                        value
                      }
                    </td>
                  </React.Fragment>
                );
              })}
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
