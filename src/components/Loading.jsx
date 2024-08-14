import React from "react";
import { Spinner} from "@chakra-ui/react";
function Loader() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c3c0c01f",
      }}
    >
      <Spinner size="xl" color="gray.600" thickness="4px" />
    </div>
  );
}

export default Loader;
