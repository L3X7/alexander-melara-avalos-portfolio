import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 20,
        background: "#27272a",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#34d399",
        borderRadius: "6px",
        border: "1px solid #52525b",
        fontWeight: 700,
        fontFamily: "monospace",
      }}
    >
      {`>_`}
    </div>,
    {
      ...size,
    },
  );
}
