import { useSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../redux/store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
