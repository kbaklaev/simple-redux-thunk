import Axios from "axios";

export const GET_PERSONS = "GET_PERSONS";

export const getPersonsWithThunk = () => {
  return (dispatch, getState) => {
    Axios.get("http://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const sortRes = res.data.sort((a, b) => a.name.localeCompare(b.name));
        dispatch(getPersons(sortRes));

        console.log("res", getState());
      })
      .catch((err) => console.log(err));
  };
};

const getPersons = (arr) => {
  return {
    type: GET_PERSONS,
    payload: arr,
  };
};
