const Skeleton = ({ times, className }) => {
  // Fancy alternative to for loop to render multiple elements
  // Creates an array of set length, fills it with zeroes and
  // maps it to an array of elements. Map won't work unless
  // there are values at any given array index
  return Array(times)
    .fill(0)
    .map((_, i) => (
      <div className={`${className} bg-gray-200 mb-2.5 overflow-hidden rounded opacity-25 relative`} key={i}>
        <div className='inset-0 absolute -translate-x-full bg-gradient-to-r from-gray-200 via-white to-gray-200 animate-shimmer'></div>
      </div>
    ));
};

export default Skeleton;
