import { useEffect } from "react";
import { useDispatch } from "store";
import { setTitle } from "slices/common";

const TitleProvider = ({ title, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle(title));
  }, []);
  return children;
};
export default TitleProvider;
