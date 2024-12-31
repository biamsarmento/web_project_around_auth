# Triple Ten
# Web Project Around Auth

Esse site mostra um perfil de um usuário e mostra fotos postadas por este. Existe uma seção "profile" 
que mostra o nome e uma descrição do usuário com um botão para editar o perfil e existe uma seção com as fotos postadas pelo usuário. 
Em cada post há um texto e um botão de like, que ao ser clicado fica preenchido.
Também podemos acrescentar e deletar fotos ná página clicando no botão + e no lixo, respectivamente.
Foi acrescentada, também, a funcionalidade de fechar os popup clicando fora dele ou então apertando em Esc.
Os formulários agora passam por uma validação e o botão "Salvar" so funciona quando tudo está válido.
Agora esse projeto foi devidamente organizado e classes foram criadas após aprendermos POO.
Em uma etapa anterior do projeto passamos a consumir uma API para salvar algumas coisas. Conseguimos usar o banco de dados através de requests feitos com um token individual. Aprendemos a interpretar o status de um request assim como o objeto que recebemos como resposta.
Na Sprint 13 reestruturamos o projeto utilizando React! Aprendemos a utilizar componentes e a criar um projeto em React do zero! 
Na Sprint 14 aprofundamos nosso conhecimento em JavaScript e React. Aprendemos a usar contexto para possibilitar que as diferentes partes do código tivessem acesso a mesma informação, mesmo se ela mudar, e também aprendemos Refs, uma forma de obter dados do usuário.

Na Sprint 17 reutilizamos o código da Sprint 13 e 14, aprimorando-o com autenticação, rotas protegidas e localStorage. Após essas modificações o projeto completo permite que os usuários criem uma conta, se já não tivemre, loguem na sua conta e acessem o seu perfil. Se não estiverem logados não conseguirão acessar nada além das telas de login e de registro. Uma vez logados o localStorage é acionado, armazenando o token para que o usuário possa entrar novamente sem ter que fazer login.

Link para o projeto: https://biamsarmento.github.io/web_project_around_react/
