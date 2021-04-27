// import {baseUrl} from '../config';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

import styles from '../styles/Home.module.css';

const Home = ({ data }) => {
  return (
    <>
      <header className="bg-white shadow-">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-2 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>

          <div className="p-4 bg-purple-200">
            <form>
              <div className="w-full flex-row justify-items-center">
                {/* <label htmlFor="myOption">Option</label>
                <input
                  type="checkbox"
                  id="myOption"
                  name="myOption"
                  value="Opt1"
                  class="appearance-none border-1 p-4 m-3 rounded-md bg-blue-400 checked:bg-blue-600 checked:border-transparent"
                /> */}
                <input type="checkbox" class="form-checkbox rounded text-pink-500 p-2 m-5" />
                <br />
                <input type="email" placeholder="Email" class="form-input p-2 border-transparent shadow-md rounded-md" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <select name="mySel" id="mySel" className="form-select w-1/2 p-2 border-transparent shadow-md rounded-md">
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
                </select>
              </div>

              <br />
              <input
                placeholder="Email..."
                className="border-6 border-solid p-4 rounded-md shadow-md border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button type="button" className={styles.btnIndigo}>
                Sign up
              </button>
            </form>
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
