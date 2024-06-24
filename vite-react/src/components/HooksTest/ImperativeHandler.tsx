import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./shake.css";

const Parent = () => {
  const test = useRef<HTMLInputElement & InputChildHandle>(null);

  return (
    <div className="flex flex-col gap-5">
      <button className="border p-2" onClick={() => [test.current?.shake()]}>
        click me
      </button>
      {/* <InputChild2 apiRef={test} /> */}
      <ForwardRefInput ref={test} placeholder="test" />
    </div>
  );
};

type InputChildProps = {
  placeholder?: string;
};

type InputChildHandle = {
  shake: () => void;
};

const ForwardRefInput = forwardRef<
  HTMLInputElement & InputChildHandle,
  InputChildProps
>(({ placeholder }, ref) => {
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    if (ref && typeof ref !== "function" && ref.current) {
      (ref.current as HTMLInputElement & InputChildHandle).shake = () => {
        setShouldShake(true);
        setTimeout(() => {
          setShouldShake(false);
        }, 500);
      };
    }
  }, [ref]);

  return (
    <input
      ref={ref}
      placeholder={placeholder}
      className={`ring-0 focus:border-red-500 border ${
        shouldShake ? "shake" : ""
      }`}
    />
  );
});

const InputChild2 = ({
  apiRef,
}: {
  apiRef: React.MutableRefObject<InputChildHandle | null>;
}) => {
  const localRef = useRef<HTMLInputElement>(null);
  const [shouldShake, setShouldShake] = useState(false);

  useImperativeHandle(
    apiRef,
    () => ({
      shake: () => {
        setShouldShake(true);
        setTimeout(() => {
          setShouldShake(false);
        }, 500);
      },
    }),
    []
  );

  return (
    <input
      ref={localRef}
      className={`ring-0 focus:border-red-500 border ${
        shouldShake ? "shake" : ""
      }`}
    />
  );
};

export default Parent;
