function UserProfilePage(props) {
    return <h1>{props.username}</h1>
}

export async function getServerSideProps(context) {
    console.log("Rerendered!")

    const {params, req, res} = context

    return {
        props: {
            username: "Max"
        }
    }
}

export default UserProfilePage