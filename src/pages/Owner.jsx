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
        I am a Junior Software Developer at Generation Thailand. This field is challenging, but I believe in the power of continuous learning and consistent self-development. I strive to improve every day, hoping to one day be skilled enough to build innovative technology that makes a positive impact on Thailand and the world.
      </p>
    </div>
  );
}

export default Owner;