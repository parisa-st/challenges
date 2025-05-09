'use client';

import React, { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../features/products/productsApi';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { add } from '../features/selection/selectionSlice';
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';

const ProductsList = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom) setVisibleCount((prev) => prev + 10);
  };

  const filtered = products?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ flex: 1, p: 2, overflowY: 'auto', maxHeight: '100vh' }} onScroll={handleScroll}>
      <Typography variant="h6" gutterBottom>
        Products
      </Typography>
      <TextField
        label="Search products"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading && <CircularProgress />}
      {filtered?.slice(0, visibleCount).map((product) => (
        <Card
          key={product.id}
          sx={{ display: 'flex', mb: 1, cursor: 'pointer' }}
          onClick={() => dispatch(add(product))}
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

export default ProductsList;