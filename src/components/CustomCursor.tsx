import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollower = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    };

    document.addEventListener('mousemove', updatePosition);
    
    const interval = setInterval(updateFollower, 16);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      clearInterval(interval);
    };
  }, [position]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      <div
        className="custom-cursor-follower"
        style={{
          left: followerPosition.x - 4,
          top: followerPosition.y - 4,
        }}
      />
    </>
  );
};

export default CustomCursor;