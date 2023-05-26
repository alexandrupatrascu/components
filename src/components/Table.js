import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    /* if a column has a special header, we do not retunr the regular th,
    but we return the custom header that is passed as prop to column */
    if (column.header) {
      /* each child in a list should have a unique "key" prop.
      to get around this we use column.label as key and we wrap the header with a component
      we cannot use any <div> or <th> because we will get an error, since it will not be valid html 
      we use a fragment instead, which is a special reach component that does not render anything
      */
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  /* we're maping over our config array and for every render function
    we're passing over the current row that we're rendering over and
    we will use that to create our ned td  */
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-2" key={column.label}>
          {column.render(rowData)}
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
}

export default Table;
