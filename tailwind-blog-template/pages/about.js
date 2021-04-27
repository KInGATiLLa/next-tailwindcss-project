const About = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-3 sm:px-6 lg:px-8 bg-green-200">
          <h1 className="font-extrabold text-blue-800 text-4xl font-sans">
            JOINT.<span className="text-purple-700">MN</span>
          </h1>
          {/* <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div> */}
        </div>
      </main>
    </>
  );
};

export default About;
