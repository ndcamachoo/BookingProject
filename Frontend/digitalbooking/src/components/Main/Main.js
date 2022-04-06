import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { CategoryContainer } from "../CategoryContainer/CategoryContainer";
import { Recommendations } from "../Recommendations/Recommendations";
import styles from "./Main.module.css";

export const Main = () => {
  const { main } = styles;


  return (
    <main className={main}>
      <SearchBar />
      <CategoryContainer />
      <Recommendations />
    </main>
  );
};
