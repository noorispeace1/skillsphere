"use client";

import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <>
      {children}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </>
  );
}
