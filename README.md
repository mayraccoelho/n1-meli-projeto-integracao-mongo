# Reprograma | Meli - API Clientes
##### Desenvolvimento de API Clientes integrando com o banco de dados MongoDB

## Tecnologias Utilizadas
### Linguagens
- Javascript<br>
- NodeJS<br>

### Banco de Dados
- MongoDB<br>

### Dependências
- Express<br>
- Nodemon<br>
- Mongoose<br>
- BodyParser<br>
- Joi<br>
- Apidoc<br>


## Endpoints Criados

<table>
<thead>
<th>Verbo</th>
<th>Funcionalidade</th>
<th>Caminho</th>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>Listar todos os clientes</td>
<td>'/clientes'
</tr>

<tr>
<td>GET</td>
<td>Listar por compradores</td>
<td>'/clientes/:compradores'</td>
</tr>

<tr>
<td>GET</td>
<td>Listar por CPF</td>
<td>'/clientes/:cpf'</td>
</tr>

<tr>
<td>POST</td>
<td>Adicionar novo cliente</td>
<td>'/clientes'</td>
</tr>

<tr>
<td>PUT</td>
<td>Atualizar cliente por CPF</td>
<td>'/clientes/:cpf'</td>
</tr>

<tr>
<td>DELETE</td>
<td>Deletar cliente por CPF</td>
<td>'/clientes/:cpf'</td>
</tr>
</table>




## Postman

https://www.getpostman.com/collections/a41139a3cea02b35b3cb
