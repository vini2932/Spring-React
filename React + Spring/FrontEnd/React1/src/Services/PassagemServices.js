import axios from 'axios'
const Passagens_API_URL='http://localhost:8080/pass'

class PassagemService{
getAllPassagens(){

    return axios.get(Passagens_API_URL);
}
createPassagem(passagem){

    return axios.post(Passagens_API_URL,passagem);
}
getPassagembyId(passagemid){

    return axios.get(Passagens_API_URL+ "/"+ passagemid);
}
updatePassagem(passagemid,passagem){
return axios.put(Passagens_API_URL +"/" + passagemid,passagem);

}
deletePassagem(passagemid){
return axios.delete(Passagens_API_URL+ "/"+ passagemid);

}
}
export default  new PassagemService();