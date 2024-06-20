import React, { memo } from "react";
import Form from "./components/Form";
import Wrapper from "../../layouts/sharedComponents/Wrapper";
import Banner from "./components/Banner";

const Signin: React.FC = () => {
  return (
    <Wrapper>
      <Form />
      <Banner />
    </Wrapper>
  );
};

export default memo(Signin);
