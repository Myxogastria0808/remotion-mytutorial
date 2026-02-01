import React from "react";
import { AbsoluteFill, spring, useCurrentFrame } from "remotion";

export type MyVideoProps = {
  title: string;
};

export const MyVideo: React.FC<MyVideoProps> = ({ title }) => {
  const frame = useCurrentFrame();

  // アニメーション
  const y = spring({
    frame,
    fps: 30,
    from: -400,
    to: 0,
    config: {
      damping: 10, // 小さいほどビヨンビヨン
      stiffness: 120,
      mass: 0.6,
    },
  });
  return (
    <AbsoluteFill
      style={{ background: "white", padding: 48, fontFamily: "sans-serif" }}
    >
      <div
        style={{
          color: "black",
          fontSize: 48,
          fontWeight: 700,
          transform: `translateY(${y}px)`,
        }}
      >
        {title}
      </div>
    </AbsoluteFill>
  );
};
