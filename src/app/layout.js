import Layout from "@/layout/Layout";
import "./globals.css";
import { yekan } from "@/utils/fonts";

import TanstackQueryProvider from "@/providers/tanstackQueryProvider";



export const metadata = {
  title: "turino | project",
  description: "پروژه تورینو",
  
};

export default function RootLayout({ children }) {
  return (
         <html lang="fa" dir="rtl">
        <body className={yekan.className}>
           <TanstackQueryProvider>
             <Layout>{children}</Layout>
           </TanstackQueryProvider>
      </body>
    </html>
      
  );
}
