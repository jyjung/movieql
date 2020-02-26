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

// import { getById ,addMovie,deleteMovie} from "./db"; 
import {getMovies,findMoviesFromTitle } from "./ytsdb"; 

const resolvers = {
    Query: {
        movies: () => getMovies() ,
        findMovies: (_, {title}) => findMoviesFromTitle(title)

        //movie: (_ , {id}) =>  getById(id)
      
    }
    /* 
    ,Mutation: {
        addMovie:(_, {name,score}) => addMovie(name,score)  ,
        deleteMovie: (_,{id}) => deleteMovie(id)
    }
    */
}

export default resolvers; 

