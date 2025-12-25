import React from "react";
import DifficultyFilter from "./components/DifficultyFilter";
import QuickTips from "./components/QuickTips";

function CareGuidePage() {
  return (
    <>
      <div className="page  ">
        <DifficultyFilter />
        <QuickTips />
      </div>
    </>
  );
}

export default CareGuidePage;
