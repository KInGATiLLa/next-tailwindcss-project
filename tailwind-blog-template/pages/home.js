// import {baseUrl} from '../config';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = ({ data }) => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
    </>

    // <div>
    //   {data &&
    //     data.data.map(({id, name}) => {
    //       return (
    //         <a href="#" key={id}>
    //           <h3>{id}</h3>
    //           <p>{name}</p>
    //         </a>
    //       );
    //     })}
    // </div>
  );
};

// export async function getStaticProps(context) {
//   const data = await fetcher(baseUrl);
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {data},
//   };
// }

export default Home;
