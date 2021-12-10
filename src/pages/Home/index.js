import React, { useState } from "react";
import Container from "../../components/Container";
import Card from "./Card";
import Filter from "./Filter";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  return (
    <Container>
      <Filter isShow={isShow} setIsShow={setIsShow} />
      <h1 className="md:grid md:grid-cols-5">
        <div className="p-2">
          <Card />
        </div>
        <div className="p-2">
          <Card />
        </div>
        <div className="p-2">
          <Card />
        </div>
        <div className="p-2">
          <Card />
        </div>
        <div className="p-2">
          <Card />
        </div>
        <div className="p-2">
          <Card />
        </div>
        <div className="p-2">
          <Card />
        </div>
      </h1>
    </Container>
  );
}
