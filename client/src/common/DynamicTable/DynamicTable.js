function DynamicTable({ data, config, className }) {
  console.log(data);
  console.log(config);
  if (!data || data.length === 0) {
    return (
      <div className="no-record">
        No records to display.
      </div>
    );
  }
  
  return (
    <table className={className}>
      <thead>
        <tr>
          {config.columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr key={row?.id}>
            {config.columns.map((col) => (
              <td key={col?.key}>
                {col?.render ? col.render(row) : row[col?.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DynamicTable;
