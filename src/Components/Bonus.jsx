import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "../ReduxToolkit/bonusReducer";

const Bouns = () => {
  const dispatch = useDispatch();
  //   const Points = 0;
  const Points = useSelector((state) => state.bonus.points);

  // * Increment without redux
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="container">
        <div className="account">
          <h4>Bonus Component</h4>
          <h5>New Points : {Points}</h5>
          <div className="btn">
            <button onClick={() => dispatch(Increment())}>Increment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bouns;
