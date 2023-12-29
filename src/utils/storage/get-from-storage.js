'use client'

import isBrowser from '@/src/utils/is-browser'

export const getCartFromLocalStorage = () => {
    if (isBrowser) {
        const cartFromStorage = localStorage.getItem('cart');
        return cartFromStorage ? JSON.parse(cartFromStorage) : [];
    }
};