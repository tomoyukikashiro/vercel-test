const Index  = () => {
  return (
    <>
      <h1>preview test page!!!! !!!!!</h1>
      <p>VERCEL_ENV: {process.env.VERCEL_ENV}</p>
      <p>NEXT_PUBLIC_VERCEL_ENV: {process.env.NEXT_PUBLIC_VERCEL_ENV}</p>
      <p>VERCEL_GIT_COMMIT_REF: {process.env.VERCEL_GIT_COMMIT_REF}</p>
      <p>NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}</p>
      <p>NEXT_PUBLIC_HOGE: {process.env.NEXT_PUBLIC_HOGE}</p>
    </>
  )
}

export default Index
