import { connection } from "next/server";
import { Suspense } from "react";
import Studio from "./Studio";

export const metadata = {
  title: "Nanosocials Studio",
  description: "Content Management Studio for Nanosocials",
};

async function StudioServer() {
  await connection();
  return <Studio />;
}

export default function StudioPage() {
  return (
    <Suspense
      fallback={
        <div style={{ height: "100vh", display: "grid", placeItems: "center", background: "#0c0a0b", color: "#fed701", fontFamily: "monospace" }}>
          INITIALIZING NANO STUDIO...
        </div>
      }
    >
      <StudioServer />
    </Suspense>
  );
}
