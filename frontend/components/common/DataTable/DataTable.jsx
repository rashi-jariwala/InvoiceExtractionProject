import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const DataTable = ({
  rows,
  columns,
  loading,
}) => {
  return (
    <Paper sx={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
      />
    </Paper>
  );
};

export default DataTable;