import HomeProductList from "@/src/components/home-product-list";
import Hero from "@/src/components/hero";
import { getConfigs } from '@/src/services/configs'
import React from "react";


export default async function Home() {

  const {
    config
  } = await getConfigs();

  return (

    <React.Fragment>

      <Hero config={config} />

      <HomeProductList />

    </React.Fragment>
  )

}
