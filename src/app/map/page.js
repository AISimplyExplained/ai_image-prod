import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Image from 'next/image';
import { Brain } from 'lucide-react';

const DiamondIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.8 1.3l-9 9c-.4.4-.4 1 0 1.4l9 9c.4.4 1 .4 1.4 0l9-9c.4-.4.4-1 0-1.4l-9-9c-.4-.4-1-.4-1.4 0z"/>
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M4.5 6.5C4.5 5.11929 5.61929 4 7 4C8.38071 4 9.5 5.11929 9.5 6.5C9.5 7.88071 8.38071 9 7 9C5.61929 9 4.5 7.88071 4.5 6.5Z"/>
    <path d="M14.5 6.5C14.5 5.11929 15.6193 4 17 4C18.3807 4 19.5 5.11929 19.5 6.5C19.5 7.88071 18.3807 9 17 9C15.6193 9 14.5 7.88071 14.5 6.5Z"/>
    <path d="M7 10C3.68629 10 1 12.6863 1 16V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V16C23 12.6863 20.3137 10 17 10H7Z"/>
    <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"/>
  </svg>
);

const PrismIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 1L3 9l9 14 9-14z"/>
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6z"/>
    <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
  </svg>
);

const PixelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"/>
  </svg>
);

const ToolCard = ({ title, description, icon: Icon, gradient, link }) => (
  <Card className="w-full transition-all hover:shadow-lg flex flex-col">
    <CardHeader>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${gradient}`}>
        <Icon />
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="mt-auto">
      <Button asChild className="w-full">
        <a href={link} target="_blank" rel="noopener noreferrer">Try it out</a>
      </Button>
    </CardContent>
  </Card>
);

const IndexPage = () => {
  const tools = [

      {
      title: "Data Dashboard",
      description: "Generate a dashboard from your excel files",
      icon: Brain,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      link: "https://dashboardai-one.vercel.app/"
    },
    {
      title: "GenText",
      description: "Chat with multiple AI models",
      icon: BookIcon,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      link: "http://gen.bionicdiamond.com/"
    },
     {
      title: "GenArt",
      description: "Chat with multiple AI models to produce creative outputs",
      icon: ImageIcon,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      link: "http://bionicdiamond.com/Genart"
    },
    
     {
      title: "Gif Builder",
      description: "Create GIFs and have granular control",
      icon: ImageIcon,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      link: "https://gif-henna.vercel.app/"
    },
    {
      title: "Diffuser",
      description: "Create stunning gradients for your diamond logo",
      icon: DiamondIcon,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      link: "http://diffuser.bionicdiamond.com/"
    },
    {
      title: "Refractor",
      description: "Refract and transform images with powerful algorithms",
      icon: PrismIcon,
      gradient: "bg-gradient-to-br from-blue-500 to-teal-500",
      link: "http://refractor.bionicdiamond.com/"
    },
    {
      title: "Research",
      description: "Explore arXiv papers and analyze census data effortlessly",
      icon: BookIcon,
      gradient: "bg-gradient-to-br from-green-500 to-yellow-500",
      link: "http://research.bionicdiamond.com/"
    },
    {
      title: "URL Shortener",
      description: "Create short, manageable links easily",
      icon: LinkIcon,
      gradient: "bg-gradient-to-br from-red-500 to-orange-500",
      link: "http://link.bionicdiamond.com/"
    },
    {
      title: "PDF Compressor",
      description: "Reduce the size of your PDF files efficiently",
      icon: FileIcon,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500",
      link: "http://crunch.bionicdiamond.com/"
    },
    {
      title: "Pixelator",
      description: "Pixelate images with ease",
      icon: PixelIcon,
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
      link: "https://pixelate-pearl.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex items-start sm:items-center mb-8 w-full max-w-6xl">
        <div className="flex items-start sm:items-center">
          <div className="mt-1 sm:mt-0 mr-4">
            <Image src="/dlogo.png" alt="Bionic Diamond Logo" width={50} height={50} />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold">
            Bionic Diamond Tool Stack
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {tools.map((tool, index) => (
          <ToolCard
            key={index}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            gradient={tool.gradient}
            link={tool.link}
          />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
