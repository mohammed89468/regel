import { useState } from 'react';

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper,
} from '@mui/material';
import Autocomplete from '@mui/lab/Autocomplete';

const billItems = [
  { id: 1, productName: 'Product 1', quantity: 1, price: 100 },
  { id: 2, productName: 'Product 2', quantity: 2, price: 200 },
  // Add more items as needed
];

const productSuggestions = ['Product 1', 'Product 2', 'Product 3'];

function BillTable() {
  const [rows, setRows] = useState(billItems);

  const handleProductChange = (event, newValue, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].productName = newValue;
    setRows(updatedRows);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <Autocomplete
                  value={row.productName}
                  onChange={(event, newValue) => handleProductChange(event, newValue, index)}
                  options={productSuggestions}
                  renderInput={(params) => <TextField {...params} variant="outlined" />}
                />
              </TableCell>
              <TableCell>
                <TextField
                  value={row.quantity}
                  type="number"
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].quantity = e.target.value;
                    setRows(updatedRows);
                  }}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BillTable;
