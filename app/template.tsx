export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div>This is Template 1</div>
      {children}
    </>
  )
}
