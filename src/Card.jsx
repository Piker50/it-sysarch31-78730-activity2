import {Students} from './Student'

function Card() {
    const listItems = Students.map(Students =>
      <li key={Students.id}>
        <div id="container-card">
        <img src={Students.src}/>
            <h3>{Students.name}</h3>
            <p>{Students.email}</p>
        </div>
      </li>
    );
    return <div id="container-students">
              {listItems}
            </div>;
  }

  export default Card