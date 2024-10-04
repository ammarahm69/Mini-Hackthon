const Card = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4"
            key={index}
          >
            <img
              className="w-full"
              src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Card Image"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.make}</div>
              <p className="text-gray-700 text-base">{item.transmission}</p>
              <p>Model {item.year}</p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Show Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
