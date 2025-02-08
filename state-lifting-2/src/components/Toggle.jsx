const Toggle = ({ index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex;

  return (
    <div className="text-2xl border-2 border-gray-300 w-60 p-4 flex flex-col justify-evenly h-60">
      <h1>About</h1>
      {isActive && (
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, esse.</p>
      )}

      {/* Button Visibility Logic */}
      {(!isActive && activeIndex !== index) ? (
        <button
          className="border bg-gray-500 px-2 py-1 text-white text-xl rounded w-20"
          onClick={() => setActiveIndex(index)}
        >
          Show
        </button>
      ) : null}
    </div>
  );
};

export default Toggle;
