import React, { FC } from "react";

import Footer from "../component/Footer";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

interface ChildrenProps {
  children: any;
}
const DefaultLayout: FC<ChildrenProps> = ({ children }: any) => {
  return (
    <div className="flex">
      <main className="flex-1 flex">
        <Sidebar />
        <div className="flex-1">{children}</div>
        <div className="p-4">Sidebar2</div>
      </main>
    </div>
  );
};

export default DefaultLayout;
