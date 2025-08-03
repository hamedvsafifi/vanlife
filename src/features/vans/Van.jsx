import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Van() {
  const [van, setVan] = useState(null);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch("/api/vans/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, [params.id]); // This will log the id of the van from the URL
  return (
    <section className="p-4">
      <p className="pb-10">
        <span>{"<-"}</span>Back to all vans
      </p>
      {van ? (
        <div>
          <div className="flex flex-col justify-center items-center w-full pb-10">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="rounded-[5px] w-full md:w-[70%] object-contain"
            />
          </div>
          <div className="flex flex-col gap-4 pb-10">
            <div
              className={`text-base md:text-xl text-center text-white rounded-[5px] px-3 py-1 md:px-4 md:py-2  w-fit mt-0 md:mt-2
          ${
            van.type === "luxury"
              ? "bg-[rgba(22,22,22,1)]"
              : van.type === "rugged"
              ? "bg-[rgba(17,94,89,1)]"
              : "bg-[rgba(225,118,84,1)]"
          }`}
            >
              {van.type}
            </div>

            <h2 className="text-2xl font-semibold">{van.name}</h2>
            <p className="text-lg font-medium">${van.price}/day</p>
            <p className="text-base md:text-lg">{van.description}</p>
            <button className="bg-primary text-white cursor-pointer text-center w-full mx-auto lg:w-1/2 rounded-md py-2 lg:py-4">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        "Loading van details..."
      )}
    </section>
  );
}
