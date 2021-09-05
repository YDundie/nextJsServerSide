import Card from '../Component/Card'

export default function Home(props) {
  return (
    <div >
      {props.data.map((e, i) => {
        return (
          <Card id={e.id}>
            <ul key={i}>
              <li>User id: {e.userId}</li>
              <li>Id: {e.id}</li>
              <li>Title: {e.title}</li>
              <li>Body: {e.body}</li>
            </ul>
          </Card>
        )
      })}

    </div>
  )
}


export async function getServerSideProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}