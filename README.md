# urlShortener
Encurtador de URL

#Apos clonar o projeto
> yarn

#configuração do banco de dados
Olhar o arquivo ormconfig.json

#criar bando de dados
> yarn typeorm migration:run

#caso queira desfazer
> yarn typeorm migration:revert

#subir o serviço
> yarn dev:server

#serviço 
>localhost:8081

#Para gerar o encurtado
POST: http://localhost:8081/encurtador/
{
	"url":"http://wisereducacao.com"
}
Resultado:
{
  "newUrl": "http://localhost:8081/bp4ydx4o98"
}

#Redirecionamento
Acessar url > http://localhost:8081/bp4ydx4o98
sera direcionado para url http://wisereducacao.com






