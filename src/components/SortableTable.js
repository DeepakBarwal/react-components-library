import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/useSort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((columnConfig) => {
    if (!columnConfig.sortValue) {
      return columnConfig;
    }

    return {
      ...columnConfig,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(columnConfig.label)}
        >
          <div className="flex items-center">
            {getIcons(columnConfig.label, sortBy, sortOrder)}
            {columnConfig.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
