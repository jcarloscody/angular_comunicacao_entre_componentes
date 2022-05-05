# Comunição entre Componentes

> - [`Input Binding`](https://github.com/jcarloscody/angular_comunicacao_entre_componentes/tree/master/src/app/input-binding)`@Input()  @Input('nome_qq')`** Aqui o foco é passar atributos para o componente por meio do template. 
> - [`Event Emitter`](https://github.com/jcarloscody/angular_comunicacao_entre_componentes/tree/master/src/app/event-emitter) **`@Output()`**  Com ele podemos passar do componente filho um evento que o componente pai poderá receber.
>  - recebendo como parâmetro:  `(evento) = "funcao($event)"`
> - [`Variáveis de templates`](https://github.com/jcarloscody/angular_comunicacao_entre_componentes/tree/master/src/app/parent-child) **`@ViewChild(NomeDoComponente)  ou  @ViewChild("variavelTemplateDeclarada")`** por esta variável você referencia os métodos e afins da classe do componente. é importante saber que se seguir esta primeira sintaxe ela pegará apenas o primeiro componente que aparecer que é do tipo NomeDoComponente e vai injetar uma instância dentro da classe, ou seja, não iremos criar uma instância, vamos apenas injetar uma instância que já existe. Você também pode cumular a sintaxe supra e a sintaxe infra quando tem mais de um componente.
>   - **`<tag #variavelTemplateDeclarada> </tag>`** com isto você também consegue tipicar uma variável de ElementRef com o citado @View para fazer várias coisas.
> - [`Input Binding`]() **``** 
> - [`Input Binding`]() **``** 
> - [`Input Binding`]() **``** 

