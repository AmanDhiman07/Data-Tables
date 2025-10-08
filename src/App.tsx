
import { DataGrid, type GridRowsProp, type GridColDef } from '@mui/x-data-grid';
import {useDemoData } from '@mui/x-data-grid-generator';
import { useState } from 'react';

import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const rows: GridRowsProp = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];
const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
];
function App() {
  const [nbRows, setNbRows] = useState(rows.length);
  const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
  const addRow = () => setNbRows((x) => Math.min(100, x + 1));
  return (
    <>
   <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        <Button size="small" onClick={removeRow}>
          Remove a row
        </Button>
        <Button size="small" onClick={addRow}>
          Add a row
        </Button>
      </Stack>
     <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows.slice(0, nbRows)} columns={columns} />
    </div>
    </>
  )
}

export default App
