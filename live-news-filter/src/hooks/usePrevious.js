//This is a hook that returns the previous value of a state or prop.
//This is used to store previous search term.
import { useEffect, useRef } from 'react';

export default function usePrevious(value) {
  const ref = useRef();

  //Any time this value changes, update ref to contain prevous value
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
