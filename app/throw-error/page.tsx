export default function ThrowError() {
  throw new Error('I am error')
  return <div>{10 / 0}</div>
}
