import React from "react";
import { useRouter } from "next/router";

const PersonDetailsPage = props => {
  const router = useRouter();

  console.log(router);

  return (
    <section className="page">
      <div className="page__heading">
        <h2>People Details Page</h2>
      </div>
    </section>
  );
};

export default PersonDetailsPage;
