import { whatToDo } from "~/constants/whatToDo";

const AllItTakes = () => {
  return (
    <section className="all-it-takes">
      <div className="container">
        <h2 className="content-title text-center my-3 my-md-5">
          {whatToDo.title}
        </h2>
        <div className="row justify-content-between">
          {whatToDo.parts.map((todo, index) => (
            <div className="col-md-6 col-lg-5" key={`do-${index}`}>
              <h4 className="content-title my-4">{todo.title}</h4>
              <ul className="ps-4 detail-list-group ms-3 mt-4 mt-lg-0 ">
                {todo.points.map((point, index) => (
                  <li className="detail-list my-lg-3" key={`dopoint-${index}`}>
                    <span className=" list-content ms-2 position-relative">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllItTakes;
