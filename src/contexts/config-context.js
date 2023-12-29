'use client'

import React from 'react';
import { CartProvider } from './cart-context';
import { FavoritiesProvider } from './favorities-context';

const ConfigContext = ({ children }) => (
    <CartProvider>
        <FavoritiesProvider>
            {children}
        </FavoritiesProvider>
    </CartProvider>
);

export { ConfigContext };