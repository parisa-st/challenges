'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { remove } from '../features/selection/selectionSlice';
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

const SelectedProducts = () => {
  const selected = useAppSelector((state) => state.selection.selected);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const filtered = selected.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ flex: 1, p: 2, overflowY: 'auto', maxHeight: '100vh' }}>
      <Typography variant="h6" gutterBottom>
        Selected Products
      </Typography>
      <TextField
        label="Search selected"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filtered.map((product) => (
        <Card
          key={product.id}
          sx={{ display: 'flex', mb: 1, cursor: 'pointer' }}
          onClick={() => dispatch(remove(product.id))}
        >
          <CardMedia
            component="img"
            sx={{ width: 60, objectFit: 'contain', p: 1 }}
            image={product.image}
            alt={product.title}
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="body2">{product.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SelectedProducts;