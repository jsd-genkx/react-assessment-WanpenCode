import catImage from '../assets/cat.jpg';

function Owner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">40 Wanpen (เป้) - JSD10</h1>
      <div className="border border-black w-52 h-52 mb-4">
        <img src={catImage} alt="Profile Picture" className="w-full h-full object-cover" />
      </div>

      <h3 className="text-xl font-semibold mb-2">My Biography</h3>
      <p className="max-w-xl text-center leading-relaxed">
        "The expert in anything was once a beginner." This quote truly resonates with me as I embark on my journey as a Junior Software Developer at Generation Thailand. I believe that every challenge is an opportunity to grow, and that every line of code brings me one step closer to my goal. My ultimate commitment is to build the skills needed to create meaningful and impactful technology that can change the world for the better.
      </p>
    </div>
  );
}

export default Owner;