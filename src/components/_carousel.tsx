"use client";
import { FIREBASE_APP } from "@/config";
import getDocument from "@/firestore/getData";
import { getFirestore, getDocs, collection, where } from "firebase/firestore";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
const db = getFirestore(FIREBASE_APP);

interface iCardProps {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
}
const Card = (props: iCardProps) => (
  <div className="card w-96 bg-base-300 shadow-xl">
    <figure>
      <Image
        width={200}
        height={200}
        src={props.imageUrl}
        alt={props.alt}
        className="object-cover w-96"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p>{props.subtitle}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Saber mais</button>
      </div>
    </div>
  </div>
);

export const Carousel = () => {
  const [projects, setProjects] = useState<any>([]);

  const getProjectsSnap = useCallback(async () => {
    const colRef = collection(db, "projects");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      console.log("DOCS", doc.data());
      setProjects((prevArray: any) => [...prevArray, doc.data()]);
    });
  }, []);

  useEffect(() => {
    getProjectsSnap();
  }, [getProjectsSnap]);
  return (
    <div
      id="projects"
      className="carousel carousel-center max-w-md p-4 space-x-4 bg-base rounded-box"
    >
      {projects &&
        projects.map((project: any) => (
          <div key={project.id} className="carousel-item">
            <Card
              key={project.title}
              imageUrl="/globoplay_logo.jpeg"
              alt={project.title}
              title={project.title}
              subtitle={project.subtitle}
            />
          </div>
        ))}
    </div>
  );
};
