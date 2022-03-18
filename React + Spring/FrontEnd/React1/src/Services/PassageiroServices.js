import axios from 'axios'
const Passageiro_API_URL='http://localhost:8080/passageiro'

class PassageiroService{
getAllPassageiro(){

    return axios.get(Passageiro_API_URL);
}
createPassageiro(passageiro){

    return axios.post(Passageiro_API_URL,passageiro);
}
getPassageirobyId(passageiroid){

    return axios.get(Passageiro_API_URL+ "/"+ passageiroid);
}
updatePassageiro(passageiroid,passageiro){
return axios.put(Passageiro_API_URL +"/" + passageiroid,passageiro);

}
deletePassageiro(passageiroid){
return axios.delete(Passageiro_API_URL+ "/"+ passageiroid);

}
}
export default  new PassageiroService();