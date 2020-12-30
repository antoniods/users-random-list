import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  console.log();
  return (
    <article className="person">
      <img
        src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`}
        alt="person"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section>
      <Person img="34" name="john" job="developer" />
      <Person img="24" name="jin" job="designer">
        <p>
          viva la mamma, affezionata a quella gonna un po' lunga, cosi elegante
          veste anni cinquanta, sempre cosi sincera!
        </p>
      </Person>
      <Person img="14" name="jack" job="galoper" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
