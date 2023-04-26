import Head from "next/head";
import { useRouter } from "next/router";

function Post({ response }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">Image</th>
              <th scope="col">creationAt</th>
              <th scope="col">updateAt</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                <th scope="row">{id}</th>
                <td>{response.name}</td>
                <td>
                  <img src={response.image} style={{ width: "100px" }}></img>
                </td>
                <td>{response.creationAt}</td>
                <td>{response.updatedAt}</td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getServerSideProps({params}) {
  const request = await fetch(`https://api.escuelajs.co/api/v1/categories/${params.id}`);
  const response = await request.json();
  return {
    props: { response },
  };
}

export default Post;