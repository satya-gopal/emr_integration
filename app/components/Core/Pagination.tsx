import { Card, MenuItem, Pagination, Select, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";

// import { paginationPropTypes } from "@/components/Core/Pagination/pagination";
import TextField from "@mui/material/TextField";
import { useSearchParams } from "next/navigation";

const TablePaginationComponent: FunctionComponent<any> = ({
  paginationDetails,
  capturePageNum,
  captureRowPerItems,
  values,
  limitOptionsFromProps,
  limitValue,
}) => {
  const params = useSearchParams();
  const [pageValue, setPageValue] = useState(paginationDetails?.page);
  const [limitOptions, setLimitOptions] = useState<any>([]);

  const handlePagerowChange = (event: any) => {
    captureRowPerItems(event.target.value);
  };

  const onKeyDownInPageChange = (e: any) => {
    if (e.key == "Enter") {
      if (pageValue <= 0) {
        capturePageNum(1);
      } else if (
        paginationDetails?.total_pages &&
        pageValue >= paginationDetails?.total_pages
      ) {
        capturePageNum(paginationDetails?.total_pages);
      } else if (totalPages && pageValue >= totalPages) {
        capturePageNum(totalPages);
      } else {
        capturePageNum(pageValue);
      }
    }
  };

  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setPageValue(paginationDetails?.page);

    if (paginationDetails?.count && !paginationDetails?.total_pages) {
      const pagesCount = Math.ceil(
        +paginationDetails?.count / +paginationDetails?.limit
      );
      setTotalPages(pagesCount);
    }
  }, [paginationDetails]);

  useEffect(() => {
    setLimitOptions(
      limitOptionsFromProps?.length
        ? limitOptionsFromProps
        : [
            { title: "10/page", value: 10 },
            { title: "25/page", value: 25 },
            { title: "50/page", value: 50 },
            { title: "75/page", value: 75 },
            { title: "100/page", value: 100 },
          ]
    );
  }, []);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px",
        position: "sticky",
        bottom: "0",
        left: "0",
      }}
    >
      <Typography
        style={{
          fontSize: "14px",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "400",
          marginTop: "5px",
          marginRight: "1rem",
          whiteSpace: "pre-wrap",
          color: "#606266",
        }}
      >
        Total{" "}
        {paginationDetails?.total
          ? paginationDetails?.total
          : paginationDetails?.count
          ? paginationDetails?.count
          : ""}
      </Typography>
      <Select
        value={
          paginationDetails?.limit ||
          limitValue ||
          (params.get("limit") as string) ||
          25
        }
        onChange={handlePagerowChange}
        sx={{
          height: "25px !important",
          borderRadius: "3px !important",
          fontSize: "11px",
          border: "none",
          marginTop: "1px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {limitOptions.map((item: any, index: number) => (
          <MenuItem
            value={item.value}
            key={index}
            sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px" }}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
      <Pagination
        shape="rounded"
        sx={{
          "& .MuiButtonBase-root": {
            height: "25px !important",
            minWidth: "25px !important",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "400",
            color: "#303133",
          },
          "& .MuiButtonBase-root:hover": {
            background: "#fff !important",
            color: "#409eff !important",
            fontFamily: "'Poppins', sans-serif !important",
            fontWeight: "500 !important",
            fontSize: "14px !important",
          },
          "& .Mui-selected": {
            background: "#fff !important",
            color: "#409eff",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
            fontSize: "14px",
          },
          "& .Mui-selected:hover": {
            // background: "#e8f3fb !important",
            color: "#fff",
          },
        }}
        page={+paginationDetails?.page ? +paginationDetails?.page : 1}
        count={
          +paginationDetails?.total_pages
            ? +paginationDetails?.total_pages
            : totalPages
            ? totalPages
            : 1
        }
        onChange={(_: any, value: number) => {
          capturePageNum(value);
        }}
      />

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
            fontWeight: "400",
            color: "#606266",
          }}
        >
          Go to
        </Typography>
        <TextField
          inputProps={{ min: 0, style: { textAlign: "center" } }}
          type="number"
          value={pageValue}
          onChange={(e: any) => setPageValue(e.target.value)}
          onKeyDown={onKeyDownInPageChange}
          onWheel={(e: any) => e.target.blur()}
          sx={{
            "& .MuiInputBase-input": {
              padding: "2px",
              width: "40px",
              height: "20px",
            },
          }}
        ></TextField>
      </div>
    </Card>
  );
};
export default TablePaginationComponent;