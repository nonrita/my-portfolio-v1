import { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';

type CircleImageProps = {
  imageSrc: string;
} & ComponentProps<'img'>;

const CircleImage: FC<CircleImageProps> = ({ imageSrc, className }, props) => {
  const baseClass = 'rounded-full w-64';
  const mergedClass = twMerge(baseClass, className);

  return (
    <>
      <img className={mergedClass} src={imageSrc} {...props} />
    </>
  );
};

export default CircleImage;
