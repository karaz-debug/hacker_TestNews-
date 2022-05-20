import { useState } from "react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import Article from "./components/Article";
import Card from "./components/Card";

const Home = ({ results }) => {
  const [items, setItem] = useState(results.hits);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [checkPass, setCheckPass] = useState(false);

  return (
    <div className="macn">
      <Head>
        <title>Hackers News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-[992px] p-3">
        {/* form */}
        <Form
          text={text}
          filterData={filterData}
          setCheckPass={setCheckPass}
          setIsLoading={setIsLoading}
          items={items}
          setText={setText}
          setFilterData={setFilterData}
          results={results}
        />
        {/* Toast */}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {isLoading ? (
          // show this spinner
          <Spinner />
        ) : (
          <div>
            {/* title */}
            <Article />

            {/* cards */}
            {checkPass === true && (
              <div className="grid gap-2 grid-column lg:grid-col-4 md:grid-cols-2">
                {filterData.map(({ title, points, author, objectID }) => (
                  <Card
                    key={objectID}
                    title={title}
                    points={points}
                    author={author}
                    objectID={objectID}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const query = "hacking";
  //request to the api
  const request = await fetch(
    `http://hn.algolia.com/api/v1/search?query=${query}`
  ).then((res) => res.json());
  //return everything into our components as a prop
  return {
    props: {
      results: request,
    },
  };
}
