import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'


const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
  }
  
  const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject)
    const response = await request
      return response.data
  }
  
  const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request
      return response.data
  }

  const deletePerson = async (deleteObject) => {
    axios.delete(`${baseUrl}/${deleteObject.id}`,deleteObject)
  }
  
  export default { 
    getAll: getAll, 
    create: create, 
    update: update,
    deletePerson: deletePerson
  }