import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBackButton, setContent } from "../store/headerSlice";
import type { HeaderContent } from "../types/navigation";

export function useHeader({
  backButton,
  content,
}: {
  backButton: boolean;
  content: HeaderContent[];
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBackButton(backButton));
    dispatch(setContent(content));
  }, [backButton, content, dispatch]);
}
