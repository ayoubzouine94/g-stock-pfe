import axios from "axios";

const CLIENT_API_BASE_URL = 'http://localhost:8080/client'

class ClientService{
    saveClient(client){
        return axios.post(CLIENT_API_BASE_URL,client);
    }
    getClient(){
      return  axios.get(CLIENT_API_BASE_URL);
    }
    deleteClient(id)
    {
        return axios.delete(CLIENT_API_BASE_URL+"/"+id);
    }

}


export default new ClientService();