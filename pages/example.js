function Example({ message }) {
    return (
        <>
            <h1>Example page</h1>
            // Render data
            <h2>{message}</h2>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            message: 'Hello world!'
        }
    }
}

export default Example