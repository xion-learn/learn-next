export default function Layout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>This is Layout 1</div>
      {children}
    </>
  )
}