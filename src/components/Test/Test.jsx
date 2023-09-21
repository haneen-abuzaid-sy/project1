const Test = ({set}) => {
    console.log("done")
  return (
    <div>
      <button onClick={() => set((prev) => prev + 1)}>click</button>
    </div>
  );
};

export default Test;
