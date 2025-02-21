import Header from "../components/layout/Header";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-20">{children}</main>
    </>
  );
} 