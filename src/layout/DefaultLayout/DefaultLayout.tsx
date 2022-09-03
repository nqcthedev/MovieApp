import React, { FC } from "react";

import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

interface ChildrenProps {
  children: any;
}
const DefaultLayout: FC<ChildrenProps> = ({ children }: any) => {
  return (
    <section>
      <div className="flex items-center">
        <Sidebar />
        <div className="max-w-full w-full">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default DefaultLayout;
