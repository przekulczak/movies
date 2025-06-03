import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "./useDebounce";

export function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [localQuery, setLocalQuery] = useState(searchParams.get("q") || "");
  const debouncedQuery = useDebounce(localQuery);
  const isTyping = localQuery !== debouncedQuery;

  const setQuery = useCallback(
    (newQuery: string) => {
      setSearchParams((prev) => {
        if (newQuery) {
          prev.set("q", newQuery);
        } else {
          prev.delete("q");
        }
        return prev;
      });
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (debouncedQuery !== searchParams.get("q")) {
      setQuery(debouncedQuery);
    }
  }, [debouncedQuery, searchParams, setQuery]);

  return {
    query: localQuery,
    setQuery: setLocalQuery,
    debouncedQuery,
    isTyping,
  };
}
