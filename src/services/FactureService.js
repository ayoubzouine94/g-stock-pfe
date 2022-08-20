import axios from "axios";

const FACTURE_API_BASE_URL = 'http://localhost:8080/facture'

class FournisseurService{
    saveFacture(facture){
        return axios.post(FACTURE_API_BASE_URL,facture);
    }
    getFournisseur(){
      return  axios.get(FACTURE_API_BASE_URL);
    }
    deleteFournisseur(id)
    {
        return axios.delete(FACTURE_API_BASE_URL+"/"+id);
    }
    getFournisseurById(id){
        return axios.get(FACTURE_API_BASE_URL+"/"+id);
    }
    updateFacture(facture,id){
        return axios.put(FACTURE_API_BASE_URL+"/"+id ,facture);
    }

}


export default new FournisseurService();