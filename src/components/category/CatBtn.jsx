import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { CategoryContext } from "../../context/categoryContext";
import LoadingBar from "react-top-loading-bar";

const CatBtn = (props) => {
  const { setBookCategory } = useContext(CategoryContext);
  const [isLoading, setLoader] = useState(false);
  const loadRef = useRef(null);

  const setStatus = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        ref={loadRef}
        height={3}
        transitionTime={800}
      />
      <Button
        borderRadius={"sm"}
        onClick={() => {
          setBookCategory(props.url);
          setStatus();
        }}
        isLoading={isLoading}
        _hover={{ bg: "darkcyan", color: "aliceblue", transition: ".5s" }}
        _active={{ bg: "darkcyan", color: "aliceblue", transition: ".5s" }}
        isActive={props.active}
      >
        {props.label}
      </Button>
    </>
  );
};

export default CatBtn;
