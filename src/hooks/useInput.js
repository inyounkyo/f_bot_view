import { useRef, useState } from "react";

export default function useInput(){
  const [value, setValue] = useState(null);
  const ref = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  }
 
  return [value, ref, onChange];
}