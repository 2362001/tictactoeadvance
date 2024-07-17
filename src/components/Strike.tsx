import React from "react";

interface IStrike {
  strikeClass?: string;
}
const Strike: React.FC<IStrike> = (props) => {
  const { strikeClass } = props;
  return <div>Strike</div>;
};

export default Strike;
