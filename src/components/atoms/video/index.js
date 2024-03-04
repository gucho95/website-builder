import { forwardRef } from 'react';

const Video = forwardRef(({ src, ...videoProps }, ref) => {
  return (
    <video muted={true} loop={true} ref={ref} preload='auto' {...videoProps}>
      <source src={src} />
    </video>
  );
});

export default Video;
