import type { ReactElement } from "react";
import { useEffect, useRef } from "react";
import { useTransition } from "@remix-run/react";

export function useProgress(): any {
  const el = useRef<any>();
  const timeout = useRef<any>();
  const { location } = useTransition();

  useEffect(() => {
    const elCopy = el.current;
    if (!location || !elCopy) {
      return;
    }

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    elCopy.style.width = `0%`;

    let updateWidth = (ms: number) => {
      timeout.current = setTimeout(() => {
        let width = parseFloat(elCopy.style.width);
        let percent = !isNaN(width) ? 10 + 0.9 * width : 0;

        elCopy.style.width = `${percent}%`;

        updateWidth(100);
      }, ms);
    };

    updateWidth(300);

    return () => {
      clearTimeout(timeout.current);

      if (elCopy.style.width === `0%`) {
        return;
      }
      elCopy.style.backgroundColor = "#1CBBDA";
      elCopy.style.width = `100%`;
      timeout.current = setTimeout(() => {
        if (elCopy?.style.width !== "100%") {
          return;
        }

        elCopy.style.width = `0%`;
      }, 200);
    };
  }, [location]);

  return el;
}

function Progress(): ReactElement {
  const progress = useProgress();

  return (
    <div className="position-fixed start-0 end-0 progress-bar top-0">
      <div
        ref={progress}
        className="text-white h-100"
      />
    </div>
  );
}

export default Progress;
