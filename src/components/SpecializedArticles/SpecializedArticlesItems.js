import { Link } from "react-router-dom";

const SpecializedArticlesItems = (props) => {
  return (
    <div className="flex flex-wrap justify-between lg:justify-around xl:justify-between">
      {!props.articles
        ? null
        : props.articles.map((article) => (
            <div
              className="flex w-[22.2rem] md:w-[20rem] lg:w-[22.2rem] relative group flex-col hover:mt-5 transition-all duration-300 rounded-md mt-7"
              key={article.id}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Link to="/" className="border-b border-b-gray-200">
                <img
                  src={article.img}
                  alt={article.title}
                  className="rounded-t-md w-full"
                />
              </Link>
              <div className="flex flex-col mx-3">
                <Link to="/">
                  <h3 className="text-[#464749] my-5 font-bold hover:text-blue-500 transition-all duration-300">
                    {article.title}
                  </h3>
                </Link>
                <span className="text-[#898989] text-sm mb-5">
                  {article.content}
                </span>
              </div>
              <div className="flex justify-end mb-3">
                <Link
                  to="/"
                  className="mx-3 border-2 border-green-500 text-green-500 rounded px-1 group-hover:text-white group-hover:bg-green-500 transition-all duration-300"
                >
                  بیشتر بخوانید
                </Link>
              </div>
            </div>
          ))}
    </div>
  );
};

export default SpecializedArticlesItems;
