import React, { useMemo, useState } from "react";
import { Player } from "@remotion/player";
import { MyVideo, type MyVideoProps } from "./remotion/MyVideo";

export const App: React.FC = () => {
  const [title, setTitle] = useState("Hello Remotion Player");

  // Player に渡す inputProps（動画側の props）
  const inputProps: MyVideoProps = useMemo(() => ({ title }), [title]);

  return (
    <div>
      <h1 style={{ color: "white" }}>Remotion + Player in Vite</h1>

      <Player
        component={MyVideo}
        inputProps={inputProps}
        durationInFrames={150}
        fps={30}
        compositionWidth={960}
        compositionHeight={540}
        controls
        style={{
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
      />

      <div style={{ marginTop: 16, display: "grid", gap: 12, maxWidth: 520 }}>
        <label style={{ color: "white", fontSize: 32 }}>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
      </div>
    </div>
  );
};

export default App;
