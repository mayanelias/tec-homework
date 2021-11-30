import React from "react";
import ShowPersons from "./ShowPersons";
class Persons extends React.Component {
  state = {
    persons: [
      {
        id: 1,
        firstName: "Mayan",
        lastName: "Elias",
      },
      {
        id: 2,
        firstName: "Ruti",
        lastName: "Ayaso",
      },
      {
        id: 3,
        firstName: "Anat",
        lastName: "Mersha",
      },
    ],
    personToEdit: { firstName: "", lastName: "" },
    inputFirstName: "",
    inputLastName: "",
  };
  removePerson = (index) => {
    const deletePerson = [...this.state.persons];
    deletePerson.splice(index, 1);

    this.setState((state) => ({
      persons: deletePerson,
    }));
  };
  render() {
    const { persons, personToEdit, inputFirstName, inputLastName } = this.state;
    return (
      <div>
        <div>
          <input
            onChange={(evt) => {
              this.setState({ inputFirstName: evt.target.value });
            }}
            defaultValue={personToEdit.firstName}
            type="text"
            placeholder="firstName"
          />
          <br />
          <br />
          <input
            onChange={(evt) => {
              this.setState({ inputLastName: evt.target.value });
            }}
            defaultValue={personToEdit.lastName}
            type="text"
            placeholder="lastName"
          />
          <br />
          <br />
          <button
            onClick={() => {
              // console.log(personToEdit.id);
              // console.log(`personToEdit.id:${personToEdit.id}`);
              let person = persons.find(
                (person) => person.id === personToEdit.id
              );
              person.firstName = inputFirstName;
              person.lastName = inputLastName;
              this.setState({ persons });
            }}
          >
            Update
          </button>
          <br />
          <br />
          {this.state.persons.map((person, i) => {
            return (
              <div key={person.id}>
                <ShowPersons persons={person} />
                <button onClick={this.removePerson}>Remove Person</button>
                <button
                  onClick={() => {
                    this.setState({ personToEdit:person});
                  }}
                >
                  Edit Person
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Persons;
