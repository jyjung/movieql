// 수정시 graphql 과 resolvers 가 같이 수정되어야 한다.  

/*
const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 18, 
        gender: "female"
    },
    {
        id: 2,
        name: "Jung",
        age: 18, 
        gender: "female"
    }
]; 

const nicolas = {
    name: "Nicolas",
    age: 18, 
    gender: "female"
}

const getById = id => {
    const filterPeople = people.filter(person => id == person.id); 
    return filterPeople[0]; 
}; 

const resolvers = {
    Query: {
        people: () => people, 
        person: (_ , {id}) =>  getById(id)
        
    } 

}

export default resolvers; 
*/

const movies = [
    {
        id: 1,
        name: "Avatar",
        socre: 99
    }, 
    {
        id: 1,
        name: "Avatar",
        socre: 99
    },
    {
        id: 1,
        name: "Avatar",
        socre: 99
    }
]; 

export const getMovies = () => movies;   
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id == id);
    return filteredMovies[0]; 
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id != id); 
    if(movies.length > cleanedMovies) {
        movies = cleanedMovies; 
        return true; 
    } else {
        return false; 
    }
}
// 나의 첫번째 GraphQL서버 만들기 #8 Defining Mutations  2:46
