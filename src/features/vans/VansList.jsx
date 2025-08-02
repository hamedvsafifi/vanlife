import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function VansList() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h2>
          Loading vans
          <span className="inline-block animate-[bounce_1s_infinite]">.</span>
          <span className="inline-block animate-[bounce_1s_infinite] [animation-delay:.2s]">
            .
          </span>
          <span className="inline-block animate-[bounce_1s_infinite] [animation-delay:.4s]">
            .
          </span>
        </h2>
      </>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
      <h2 className="sm:col-span-2 md:col-span-3 "> Explore our van options</h2>

      {vans.map((van) => (
        <Link
          to={`/vans/${van.id}`}
          key={van.id}
          aria-label={`view details for ${van.name} van with price ${van.price} per day and type ${van.type}`}
        >
          <Van key={van.id} van={van} />
        </Link>
      ))}
    </section>
  );

  function Van({ van }) {
    return (
      <div className="flex flex-wrap flex-col">
        <img
          src={van.imageUrl}
          alt={van.name}
          loading="lazy"
          className="rounded-[5px] w-full h-[229.23px] lg:h-96 object-cover"
        />
        <div className="flex justify-between items-start mt-2">
          <h3 className="text-xl font-semibold">{van.name}</h3>
          <div className="flex flex-col items-end">
            <span className="text-xl font-medium">${van.price}</span>
            <span className="text-sm text-gray-600">/ day</span>
          </div>
        </div>
        <div
          className={`text-xl text-center text-white rounded-[5px] px-4 py-2 w-fit mt-0 md:mt-2
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
      </div>
    );
  }
}
