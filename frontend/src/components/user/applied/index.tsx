import React, { useEffect } from "react";

const Applied = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchApplied = async () => {
      await fetch(
        `http://localhost:3000/jobs/appplied/${user.response.id}`
      ).then((res) => {
        console.log(res);
      });
    };
    fetchApplied();
  }, []);
  return <div>Applied</div>;
};

export default Applied;
