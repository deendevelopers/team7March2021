import { useRef, EffectCallback, DependencyList, useEffect } from "react";

function useOnUpdateEffect(func: EffectCallback, deps: DependencyList): void {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
}

export default useOnUpdateEffect;
