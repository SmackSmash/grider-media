import classNames from 'classnames';

const Skeleton = ({ times }) => {
  // Fancy alternative to for loop to render multiple elements
  // Creates an array of set length, fills it with zeroes and
  // maps it to an array of elements. Map won't work unless
  // there are values at any given array index
  return Array(times)
    .fill(0)
    .map((_, i) => <div key={i}>Skeleton!</div>);
};

export default Skeleton;
