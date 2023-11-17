import myfetch from '../utils/myfetch'
import {useState, useEffect} from 'react'


const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    // useEffect com vetor de dependências vazio é executado apenas
    // uma vez, na fase mount do ciclo de vida do componente
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const result = await myfetch.get('customers')
            setCustomers(result)
        } catch (error) {
            // Deu errado
            console.error(error)
            alert('ERRO: ' + error.message)
        }
    }

    return (
        <>
            <h1>Listagem de clientes</h1>
            <p>{JSON.stringify(customers)}</p>
        </>
    )
}

export default CustomerList