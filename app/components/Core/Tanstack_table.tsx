import { Backdrop } from "@mui/material";
import Container from "@mui/material/Container";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import TablePaginationComponent from "./Pagination";

const TanStackTableComponent: FunctionComponent<any> = ({
  columns,
  data,
  loading,
  getData,
  paginationDetails,
  removeSortingForColumnIds,
  isClinicalDetails,
}) => {
  const [rowSelection, setRowSelection] = useState<any>([]);
  const params = useSearchParams();

  console.log("Columns:", columns);
  console.log("Data:", data);
  console.log("Loading:", loading);
  console.log("Pagination Details:", paginationDetails);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
  });

  const getWidth = (id: string) => {
    const widthObj = columns.find((item: any) => item.accessorKey == id);
    const width = widthObj?.width;
    return width;
  };

  const capturePageNum = (value: number) => {
    getData({
      limit: params.get("limit") as string,
      page: value,
    });
  };

  const captureRowPerItems = (value: number) => {
    getData({
      limit: value,
      page: 1,
    });
  };

  const sortAndGetData = (header: any) => {
    if (
      removeSortingForColumnIds &&
      removeSortingForColumnIds?.length &&
      removeSortingForColumnIds.includes(header.id)
    ) {
      return;
    }
    let orderBy = header.id;
    let orderType = "asc";
    if ((params.get("order_by") as string) == header.id) {
      if ((params.get("order_type") as string) == "asc") {
        orderType = "desc";
      } else {
        orderBy = "";
        orderType = "";
      }
    }

    getData({
      order_by: orderBy,
      order_type: orderType,
    });
  };

  return (
    <div className="defaultTable">
      <div className="tableContainer">
        <table
          className="table"
          border={0}
          style={{
            borderSpacing: " 0 1px",
            borderCollapse: "separate",
            width: "100%",
          }}
        >
          <thead
            className="thead"
            style={{
              height: "32px",
              position: "sticky",
              top: "0px",
              zIndex: "2",
              color: "white",
            }}
          >
            {table
              .getHeaderGroups()
              .map((headerGroup: any, mainIndex: number) => (
                <tr className="table-row" key={mainIndex}>
                  {headerGroup.headers.map((header: any, index: number) => {
                    return (
                      <th
                        key={index}
                        className="table-row"
                        colSpan={header.colSpan}
                        style={{
                          minWidth: getWidth(header.id),
                        }}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            className="cell"
                            style={{
                              display: "flex",
                              gap: "4px",
                              cursor: "pointer",
                              alignItems: "center",
                            }}
                            onClick={() => sortAndGetData(header)}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            <SortItems
                              header={header}
                              removeSortingForColumnIds={
                                removeSortingForColumnIds
                              }
                            />
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
          </thead>
          <tbody className="tbody">
            {data?.length ? (
              table
                .getFilteredRowModel()
                .rows.map((row: any, mainIndex: number) => {
                  return (
                    <tr className="table-row" key={mainIndex}>
                      {row.getVisibleCells().map((cell: any, index: number) => {
                        return (
                          <td className="cell" key={index}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
            ) : !loading ? (
              <tr>
                <td colSpan={10}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    <Image
                      src="/core/no-data.svg"
                      alt="No Data"
                      height={200}
                      width={600}
                    />
                    <p style={{ fontSize: "clamp(20px, 1.04vw, 22px)" }}>
                      No Data
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>
      <div className="listingPagination">
        <TablePaginationComponent
          paginationDetails={paginationDetails}
          capturePageNum={capturePageNum}
          captureRowPerItems={captureRowPerItems}
          values="Cases"
        />
      </div>
    </div>
  );
};

export default TanStackTableComponent;

const SortItems = ({
  header,
  removeSortingForColumnIds,
}: {
  header: any;
  removeSortingForColumnIds?: string[];
}) => {
  const params = useSearchParams();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {params.get("order_by") == header.id ? (
        params.get("order_type") == "asc" ? (
          <Image src="/sort-asc.svg" height={13} width={13} alt="Ascending Sort" />
        ) : (
          <Image src="/sort-desc.svg" height={13} width={13} alt="Descending Sort" />
        )
      ) : removeSortingForColumnIds?.includes(header.id) ? (
        ""
      ) : (
        <Image src="/un-sorted.svg" height={13} width={15} alt="Unsorted" />
      )}
    </div>
  );
};
