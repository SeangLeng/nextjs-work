import Head from "next/head";
import Link from "next/link";

function Post({ respone }) {
    console.log(respone)
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
            </Head>
            
            <div class="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">Image</th>
                        <th scope="col">creationAt</th>
                        <th scope="col">updateAt</th>
                        <th scope="col">link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        respone.map(e => (
                            <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td>{e.name}</td>
                                <td><img src={e.image} style={{width: '100px'}}></img></td>
                                <td>{e.creationAt}</td>
                                <td>{e.updatedAt}</td>
                                <td>
                                    <Link href={`/post/${e.id}`}>Click link</Link>
                                </td>                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
            
        </>
    )
}

// implement static generation: 
export async function getServerSideProps() {
    const request = await fetch('https://api.escuelajs.co/api/v1/categories');
    const respone = await request.json();
    return {
        props: { respone },
    }
}
export default Post; 