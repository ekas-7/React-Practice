import image from "./assets/hello.png";
import Colorchanger from "./components/Colorchanger";
import ParagraphGenerator from "./components/ParagraphGenerator";
import OTP from "./components/OTP";

export default function App() {
  return (
    <>
    <div
      className="bg-teal-800 h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-80 mt-4 w-80 h-80 rounded-md flex flex-col justify-between items-center p-4">
        {/* Profile Image with Background */}
        <div
          className="w-24 h-24 rounded-full overflow-hidden bg-gray-200"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={image}
            alt="profile"
            className="w-full h-full object-cover opacity-0"
          />
        </div>

        {/* Name Section */}
        <h1 className="text-black text-2xl mt-4">John Doe</h1>

        {/* Followers, Likes, and Comments Section */}
        <div className="flex justify-around w-full mt-4">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">120</span>
            <span className="text-sm text-gray-600">Followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">80</span>
            <span className="text-sm text-gray-600">Likes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold">30</span>
            <span className="text-sm text-gray-600">Comments</span>
          </div>
        </div>
      </div>
      
    </div>
    <Colorchanger />
    <ParagraphGenerator />
    <OTP />
    </>
  );
}
