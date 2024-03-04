"use client"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface Project {
    imagePath: string;
    title: string;
    tags: string[];
    description: string;
    githubUrl: string;
  }
  
  interface ProjectCardProps {
    project: Project;
  }
  
  export default function ProjectCard({ project }: ProjectCardProps) {
    const { imagePath, title, tags, description,githubUrl } = project;
  
    return (
        <div className="flex justify-center mb-4">
      <Card>
       
          <Image
            alt="Cover image"
            className="object-cover"
            height={500}
            src={imagePath}
            width={800}
          />
      
        <CardContent className="p-2">
          <Balancer>
          <h2 className="text-2xl font-bold mb-2 text-clip ">{title}</h2>
          </Balancer>
          <div className="flex justify-center space-x-2">
            {tags.map(tag => (
              <div
                key={tag}
                className="inline-flex animate-shine items-center justify-center rounded-full text-xs border border-neutral-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-3 py-1 font-medium text-neutral-400 transition-colors"
              >
                {tag}
              </div>
            ))}
          </div>
        </CardContent>
        <CardContent className="p-2">
        <Balancer>
          <p className="text-sm text-gray-500">{description}</p>
          </Balancer>
        </CardContent>
        <CardFooter>
          <div className="mx-auto">
          <Button variant={"link"}> 
            <Link href={githubUrl}>View on GitHub
          </Link>
          </Button>
          </div>
      
        </CardFooter>
      </Card>
      </div>
    );
  }