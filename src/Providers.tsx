"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AntdRegistry } from "@ant-design/nextjs-registry";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(new QueryClient({}));

  return (
    <AntdRegistry>
      <QueryClientProvider client={client}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AntdRegistry>
  );
}

export default Providers;
