export const metadata = {
  title: "Nanosocials Studio",
  description: "Content Management Studio for Nanosocials",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function StudioLayout({ children }) {
  return (
    <div style={{ margin: 0, height: "100vh", maxHeight: "100dvh", width: "100vw", overflow: "hidden" }}>
      {children}
    </div>
  );
}
