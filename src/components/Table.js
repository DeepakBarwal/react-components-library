import { Fragment } from "react";

const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((columnConfig) => {
    if (columnConfig.header) {
      return (
        <Fragment key={columnConfig.label}>{columnConfig.header()}</Fragment>
      );
    }

    return <th key={columnConfig.label}>{columnConfig.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((columnConfig) => {
      return (
        <td key={columnConfig.label} className="p-2">
          {columnConfig.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
