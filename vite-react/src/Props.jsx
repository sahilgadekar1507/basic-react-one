import "./Props.css";

export default function Props({ username, position }) {
  return (
    <>
      <div className="Cards">
        <img src="/vite.svg" alt="image" />
        <h2>Name: {username}</h2>
        <h3>Position: {position}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          fugiat ducimus nostrum dolorem atque molestiae quam quia vero, libero
          praesentium quasi modi veniam rem velit consequuntur! Consequatur,
          magni reprehenderit modi, eum consectetur alias saepe sed inventore
          cumque illum recusandae quasi, voluptate voluptatem. Tempore
          blanditiis assumenda eum consequuntur dicta, porro repellendus.
        </p>
      </div>
    </>
  );
}
