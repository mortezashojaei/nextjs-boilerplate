import React, { FC } from "react";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { item } = router.query;

  return (
    <div>
      <h1>I am param : </h1>
      {item}
    </div>
  );
};
