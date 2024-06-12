import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useCallback, useMemo } from "react";
import { SigninData, signin } from "./action";
import { count } from "./reducers";

export const useAuth = () => {
  const dispath = useAppDispatch();

  const { token, countTest } = useAppSelector(
    (state) => state.app,
    shallowEqual,
  );

  const isLoggedIn = useMemo(() => !!token, [token]);

  const onSignin = useCallback(
    async (data: SigninData) => {
      try {
        return await dispath(signin(data)).unwrap();
      } catch (error) {
        throw error;
      }
    },
    [dispath],
  );

  const onAddTest = () => dispath(count(2));

  return {
    token,
    isLoggedIn,
    onSignin,
    countTest,
    onAddTest,
  };
};
