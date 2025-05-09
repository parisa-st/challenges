'use client';

import React from 'react';
import ProductsList from '../components/ProductsList';
import UsersList from '../components/UsersList';
import SelectedProducts from '../components/SelectedProducts';
import { Box, Container } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1, borderRight: { md: '1px solid #ccc' } }}>
          <ProductsList />
        </Box>
        <Box sx={{ flex: 1, borderRight: { md: '1px solid #ccc' } }}>
          <UsersList />
        </Box>
        <Box sx={{ flex: 1 }}>
          <SelectedProducts />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;