import React from "react";

function ServiceDetail({ title, children }) {
  return (
    <section className="pb-24 bg-[#f7f2ed] text-[#4a545a]">
      <h1 className="text-3xl font-serif text-center">{title}</h1>
      {children}
    </section>
  );
}

export default ServiceDetail;

