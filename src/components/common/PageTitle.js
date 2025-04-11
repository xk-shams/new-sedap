import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function PageTitle(props) {
  const { title, subtitle, back, id } = props;
  const router = useRouter();
  return (
    <div>
      <h1 style={{ marginBottom: "15px" }}>
        {title} {id}
      </h1>
      <p
        style={{
          fontWeight: "500",
          fontSize: "18px",
          color: "#A3A3A3",
        }}
      >
        <span onClick={() => router.back()}>{back}</span>
        {subtitle}
      </p>
    </div>
  );
}

export default PageTitle;
