"use client"

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";


interface Props { };


const Page: FC<Props> = (props) => {

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div>
      <Heading
        title="ELearnify"
        description="Elearnify is a platform for students to learn and get help from teachers"
        keywords="programming,MERN,Redux,Machine Learning"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero/>
    </div>
  )
}

export default Page