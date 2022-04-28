export default function ErrorFallback({error}) {
  return (
    <div>
        <h3>ErrorFallback</h3>
        <pre>{error.message}</pre>
    </div>
  )
}
