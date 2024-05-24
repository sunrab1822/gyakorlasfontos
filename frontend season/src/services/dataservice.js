import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:3000';

export default {
    getAllSeasons(){
        return Axios.get('/seasons')
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    getByID(id, page, limit){
        
        return Axios.get(`/episodes?season=${id}&_page=${page}&_limit=${limit}`)
    },
    getwatches(page){
        return Axios.get(`/watches?_page=${page}`)
    },
    saveUser(user){
        return Axios.post('/users',user).then(()=>{});
    },
    updateUser(user,id){
        return Axios.put(`/users/${id}`,user).then(()=>{});
    }


}