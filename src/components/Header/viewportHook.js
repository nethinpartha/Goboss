import { useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(`${query}`);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    window.addEventListener(mediaMatch, handler);

    return () => window.removeEventListener(mediaMatch, handler);
  }, [matches]);
  return matches;
};
