function serverSideRender(props) {
    return (

        <div>

            {JSON.stringify(props.data)}
        </div>
    );
}

export async function getServerSideProps(context) {
    console.log('context :>> ', context);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.query.id}`)
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

export default serverSideRender;