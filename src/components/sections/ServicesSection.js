import React from "react";
import { useSelector } from "react-redux";
import styles from "./ServicesSection.module.css";
import SectionTitle from "../SectionTitle";
import { vhWithoutHeader } from "../../helpers/helpers";

export default function ServicesSection() {
  const headerHeight = useSelector((state) => state.header.height);
  const servicesSectionheight = vhWithoutHeader(headerHeight);

  return (
    <section
      className={styles.ServicesSection}
      style={
        !isNaN(servicesSectionheight) ? { height: servicesSectionheight } : null
      }
    >
      <SectionTitle text="サービス"></SectionTitle>
    </section>
  );
}
