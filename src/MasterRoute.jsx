import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MasterRoute = ({ Component }) => {
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (user !== "" || user !== null) {
      setFlag(true);
    } else {
      navigate("/");
    }
  }, []);

  return <>{flag && <Component />}</>;
};

export default MasterRoute;
