import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-10">Generation Thailand<br />React - Assessment</h1>
      <div className="flex justify-center space-x-4 mt-8">
        <Link to="/user">
          <button className="w-[150px] font-bold text-base px-4 py-2 text-white bg-pink-500 hover:bg-pink-700 border border-transparent rounded shadow-sm hover:shadow-md transition-shadow">
            User Home Section
          </button>
        </Link>
        <Link to="/admin">
          <button className="w-[150px] font-bold text-base px-4 py-2 text-white bg-pink-500 hover:bg-pink-700 border border-transparent rounded shadow-sm hover:shadow-md transition-shadow">
            Admin Home Section
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;