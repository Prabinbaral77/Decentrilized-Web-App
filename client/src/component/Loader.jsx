import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="rounded-full h-12 w-12 border-l-2 border-red-800 animate-spin" />
    </div>
  );
}

export default Loader;
