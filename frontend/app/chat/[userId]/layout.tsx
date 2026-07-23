'use client'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default  function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    
    <QueryClientProvider client={queryClient}>
        {children}

    </QueryClientProvider>
    
     

       
  );
}
