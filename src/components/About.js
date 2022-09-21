import React from "react";
import Links from "./Links"



// console.log(user.links.linkedin)
// console.log(user.links.github)

function About(user) {
// console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio ?<p>{user.bio}</p>: ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={user.linkedin} github={user.github} />
      
    </div>
  );
}

export default About;
