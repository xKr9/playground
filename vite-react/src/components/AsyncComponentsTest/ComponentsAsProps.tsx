import React from "react";

type ComponentProps = {
  name: string;
  age: number;
};

type Props = {
  someComponent: React.ComponentType<ComponentProps>;
};

const ComponentsAsProps = ({ someComponent: SomeComponent }: Props) => {
  return (
    <div>
      <h1>Hey</h1>
      <SomeComponent age={1} name="Dom" />
    </div>
  );
};

const Main = () => {
  return (
    <section>
      <ComponentsAsProps
        someComponent={({ age, name }) => (
          <div>
            <h1>{name}</h1>
            <p>{age}</p>
          </div>
        )}
      />
    </section>
  );
};

export default Main;
