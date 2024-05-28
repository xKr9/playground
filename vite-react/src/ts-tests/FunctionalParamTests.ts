type ReturnTypeOne = {
  name: string;
  age: number;
};

type ReturnTypewo = {
  height: number;
  weight: number;
};

async function ConditionalReturnType<Condition extends boolean>({
  condition,
}: {
  condition: Condition;
}): Promise<Condition extends true ? ReturnTypeOne : ReturnTypewo> {
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve(0 as unknown as ReturnTypeOne);
    }
    resolve(1);
  });
  const result = await promise;
  return result;
}
