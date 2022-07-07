import React from "react";
import { useRouter } from "next/router";

const PersonAddressPage = props => {
  const router = useRouter();

  console.log(router);

  return (
    <section className="page">
      <div className="page__heading">
        <h2>This is the specific persons address page</h2>
      </div>
    </section>
  );
};

export default PersonAddressPage;
