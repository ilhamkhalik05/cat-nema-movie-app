'use client';

import React from 'react';
import { poppins } from '@/lib/font';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function ToastProvider() {
  return (
    <ToastContainer
      className={`${poppins.className} font-[600]`}
      autoClose={4000}
      position="top-right"
      closeButton={true}
      draggable={true}
      draggableDirection="y"
      theme="dark"
    />
  );
}
