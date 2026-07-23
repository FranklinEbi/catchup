import type { Metadata } from "next";
import { getCookies } from "../lib/getCookies";
import SocketContextProvider from "../context/SocketContextProvider";
import ReceiverContextProvider from "../context/ReceiverContextProvider";
export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const {accessToken} = await getCookies()
  return (

     <SocketContextProvider accessToken={accessToken!}>
      <ReceiverContextProvider>

        {children}
      </ReceiverContextProvider>
     </SocketContextProvider>
    

       
  );
}
