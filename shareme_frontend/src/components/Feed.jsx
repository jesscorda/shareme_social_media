import React, { useEffect, useState } from "react";
import MasonryLayout from "./MasonryLayout";
import { feedQuery, searchQuery } from "../utils/data";
import { client } from "../client";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const Feed = () => {
  const [pins, setPins] = useState(null);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  const ideaName = categoryId || "new";

  useEffect(() => {
    const query = categoryId ? searchQuery(categoryId) : feedQuery;
    setLoading(true);
    client.fetch(query).then((data) => {
      setPins(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }

  return (
    <div>
      {pins?.length > 0 ? (
        <MasonryLayout pins={pins} />
      ) : (
        <p className="mt-32 text-gray-400">No pins found for {categoryId}</p>
      )}
    </div>
  );
};

export default Feed;
