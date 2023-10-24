import React from "react";

import { LuSettings } from "react-icons/lu";

const Loading: React.FC = () => {
  return (
    <div>
      <LuSettings className="w-4 h-auto animate-spin" />
    </div>
  );
};

export default Loading;
