import { BiDownload } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const Card = ({ app }) => {
  const { image, title, downloads, ratingAvg, id } = app;

  const formatDownloads = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };

  return (
    <div className="w-full border-2 border-purple-50 shadow-md hover:scale-105 transition ease-in-out">
      <Link to={`/appDetails/${id}`}>
        <div className="bg-white py-5 px-3 rounded-md">
          <img
            className="w-full h-auto max-w-[250px] aspect-square object-contain mx-auto rounded-lg"
            src={image}
            alt=""
          />
          <h3 className="lg:ml-4 mt-4 text-[#001931] font-semibold text-lg">
            {title}
          </h3>
          <div className="flex flex-wrap justify-between lg:ml-4 mt-4">
            <p className="bg-green-100 text-green-600 flex items-center gap-2 p-1 rounded-md ">
              <BiDownload />
              {formatDownloads(downloads)}
            </p>
            <p className="bg-amber-100 text-amber-600 flex items-center gap-2 p-1 rounded-md lg:mr-4">
              <FaStar />
              {ratingAvg}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
