import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setBackButton,
  setContent,
  setTitle,
} from "../store/header/headerSlice";
import type { HeaderContent } from "../types";

export function useHeader({
  backButton,
  content,
  title,
}: {
  backButton: boolean;
  content: HeaderContent[];
  title?: string;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackButton(backButton));
    dispatch(setContent(content));
    dispatch(setTitle(title));
  }, [backButton, content, dispatch, title]);
}
