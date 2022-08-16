const DefaultErrorFallback = ({ reset }: { reset: any }) => {
  return (
    <div>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default DefaultErrorFallback;
