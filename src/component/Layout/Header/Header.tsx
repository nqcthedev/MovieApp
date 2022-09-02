import React, { FC } from "react";

import LogonImage from "@/assets/logo.png";

const Header: FC = () => {
  return (
    <section className="">
      <img src={LogonImage} alt="logo" />
    </section>
  );
};

export default Header;
