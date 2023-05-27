import React from "react";
import Card from "./Card";
import image1 from "../assets/react.jpeg";
import image2 from "../assets/java.jpeg";
import image3 from "../assets/docker.jpeg";

const cards =[

{
id:1,
title:'Curso de react',
image: image1,
instructor:'Omar Campos'

},
{
  id:2,
  title:'Curso de Java',
  image: image2,
  instructor:'Omar '
},
{
  id:3,
  title:'Curso de Docker',
  image: image3,
  instructor:'Campos'
}
]


export default function Cards() {
  return (
    <div className="container d-flex justify-content aling-item-center h-100">
      <div className="row">
        {
            cards.map(c =>(
          <div className="col-md-4" key={cards.id}>
            <Card 
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            instructor={c.instructor}
            />
          </div>
            ))
        }
      </div>
    </div>
  );
}