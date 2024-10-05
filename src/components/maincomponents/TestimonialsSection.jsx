import React from 'react';

function AboutMeSection() {
  return (
    <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6">About Me</h2>
      <p className="text-lg text-gray-300 mb-4">
        I’m Akshat Soni, a passionate web developer with a love for creating engaging and user-friendly web applications. 
        With a background in Computer Science, I enjoy exploring new technologies and continually enhancing my skills. 
        My goal is to build innovative solutions that improve user experiences and solve real-world problems.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        I have experience in a variety of web development technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. 
        I thrive in collaborative environments and enjoy working with teams to deliver high-quality projects on time.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        In my free time, I love to contribute to open-source projects, learn new programming languages, and stay updated with the latest industry trends. 
        I also enjoy [mention other hobbies, e.g., hiking, photography, or playing video games], which help me maintain a balanced lifestyle.
      </p>
      <h3 className="text-2xl font-semibold text-white mt-6 mb-2">Let's Connect!</h3>
      <p className="text-lg text-gray-300">
        If you’d like to collaborate on a project or just want to say hi, feel free to reach out to me through my 
        <a href="mailto:akshat.soni.work@gmail.com" className="text-blue-400 hover:underline"> email</a> or connect with me on 
        <a href="https://www.linkedin.com/in/akshat-soni-7b0831247/" className="text-blue-400 hover:underline"> LinkedIn</a>.
      </p>
    </section>
  );
}

export default AboutMeSection;
