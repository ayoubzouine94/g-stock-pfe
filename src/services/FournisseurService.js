import axios from "axios";

const FOURNISSEUR_API_BASE_URL = 'http://localhost:8080/fournisseur'

class FournisseurService{
    saveFournisseur(fournisseur){
        return axios.post(FOURNISSEUR_API_BASE_URL,fournisseur);
    }
    getFournisseur(){
      return  axios.get(FOURNISSEUR_API_BASE_URL);
    }
    deleteFournisseur(id)
    {
        return axios.delete(FOURNISSEUR_API_BASE_URL+"/"+id);
    }
    getFournisseurById(id){
        return axios.get(FOURNISSEUR_API_BASE_URL+"/"+id);
    }
    updateFournisseur(fournisseur,id){
        return axios.put(FOURNISSEUR_API_BASE_URL+"/"+id ,fournisseur);
    }

}


export default new FournisseurService();