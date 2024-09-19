export default function Layout({
  children,
  one,
  two,
}: {
  children: React.ReactNode
  one: React.ReactNode
  two: React.ReactNode
}) {
  return (
    <>
      {children}
      {one}
      {two}
    </>
  )
}
