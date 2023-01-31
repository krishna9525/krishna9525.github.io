import React from "react";





const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "https://cdn.cdnlogo.com/logos/h/84/html.svg",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      title: "React js",
      style: "shadow-blue-600",
    },
       
    {
      id: 5,
      src: "data:image/png;base64,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",
      title: "Redux",
      style: "shadow-blue-600",
    },
       
    {
      id: 6,
      src: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png",
      title: "chakra UI",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: "data:image/png;base64,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",
      title: "node js",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.jpg",
      title: "MongoDB",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
      title: "Github",
      style: "shadow-blue-600",
    },
       
    
       
       
    
   
    
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="abc" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
