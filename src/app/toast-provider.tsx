'use client';

import React from 'react';
import { poppins } from '@/lib/font';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { cn } from '@/lib/utils';

export default function ToastProvider() {
  return (
    <ToastContainer
      bodyClassName={cn(`${poppins.className} font-[400]`)}
      autoClose={3000}
      position="top-right"
      closeButton={true}
      draggable={true}
      draggableDirection="y"
      theme="dark"
      limit={3}
      pauseOnHover={true}
    />
  );
}
