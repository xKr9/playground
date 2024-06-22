type Props = {
  isOpen: boolean;
};

type ofReturnType = ReturnType<typeof ReturnTypedComponent>;

export default function ReturnTypedComponent({ isOpen }: Props) {
  console.log(isOpen);
  return <div className="">Example</div>;
}
