import React from 'react'
import Button from '@mui/material/Button'

// foto
import some_cars from '../assets/some-cars.png'

// hooks
import { useState } from 'react'

export default function Homepage() {

  const [show, setShow] = useState(false)   // Transforme isto em uma variável de estado

  console.log("Carregar pagina " + show) // quando a pagina é carregada eu verifico se o valor da variavel show é igual a false

  const handleChange = (e) => {  // essa função é responsavel por inverter valor da variavel show, false esconde a imagem, true mostra
    console.log("Click botao " + show) // aqui eu valido que o valor da variavel show ainda é false
    e.preventDefault() // usado em SPA's para quando a função for chamada não recarregar a página

    if (show === false) { // verifico se o valor da variavel show é false 
      setShow(true) // se a primeira condição for verdadeira o state atribui true para a variavel de estado
      console.log("teste do if " + show) // valido no console que agora a variavel show recebeu o valor true
    } else {
      setShow(false) // caso contrário, ou seja, se a variavel show já tem valor true, o state atriui false para variavel show, assim escondendo a imagem novamente
      console.log("teste do else " + show) // aqui eu verifico via console se a viarivel show recebeu o valor false.
    }
  }

  return (
    <>
      <h1>Bem-vindo(a) à loja Karangos!</h1>
      <p>Karangos é um projeto front-end desenvolvido pelo Prof. Fausto Cintra juntamente com a turma do 4º semestre matutino de ADS da Fatec Franca.</p>
      <p>Seu objetivo é demonstrar as funcionalidades e possibilidades do React em conjunto com a biblioteca de componentes Material UI, acessando uma API REST remota.</p>
      <p>Clique sobre ícone do menu no canto superior esquerdo para acessar as funcionalidades.</p>
      <p>Use o menu na parte superior à esquerda para acessar as funcionalidades do sistema.</p>
      <div style={{ textAlign: 'center' }}>
        <Button color="secondary" variant="contained" onClick={handleChange}>
          Clique aqui!
        </Button>
      </div>
      {/* quebrei uma linha com a tag <br /> para melhor separar o botão da imagem */}
      <br />
      {/* adicionei a propriedade src para referencia a imagem importada */}
      <img src={some_cars} alt="Carros antigos" style={{ height: show ? '591px' : '0', opacity: show ? '1' : '0' }} />
    </>
  )
}