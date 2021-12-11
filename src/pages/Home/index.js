import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";

import { getAllAdds } from "../../actions/add";

//components
import Container from "../../components/Container";
import Card from "./Card";
import Filter from "./Filter";

export default function Home() {
  const dispatch = useDispatch();

  const { adds, addLoading } = useSelector((state) => state.add);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    dispatch(getAllAdds());
  }, [dispatch]);

  return (
    <Container>
      <Filter isShow={isShow} setIsShow={setIsShow} />
      <h1 className="md:grid md:grid-cols-5">
        {!addLoading && adds ? (
          adds.map((add) => (
            <div className="p-2">
              <Card key={add._id} add={add} />
            </div>
          ))
        ) : (
          <>
            <Skeleton count={3} />
            <Skeleton count={3} />
            <Skeleton count={3} />
            <Skeleton count={3} />
            <Skeleton count={3} />
          </>
        )}
      </h1>
    </Container>
  );
}
