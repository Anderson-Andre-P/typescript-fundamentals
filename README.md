<h2>O que é?</h2>
<p>
    <strong>TypeScript</strong> é um superset para JavaScript, com <strong>tipagem estática, novos recursos</strong> e que <strong>compila para JavaScript puro</strong>.
</p>

<h2>
    Tipagem estática
</h2>


```Js
   function multiplyNumbers(x, y) {
       return x * y;
   }

   const result = multiplyNumbers(10, [1, 2]); // O Js só vai indicar um erro quando compilar o código
   console.log(result); // NaN
```

```Ts
   function multiplyNumbers(x: number, y: number) {
       return x * y;
   }

   const result = multiplyNumbers(10, [1, 2]); // O Ts já vai indicar um erro quando passar o array antes de você precisar compilar o código
   console.log(result); // NaN
```

<h2>
    Novos recursos
</h2>


```Ts
   interface TemNome {
       nome: string;
   }

   interface TemSobrenome {
       sobrenome: string;
   }

   class desenvolvedorWeb implements TemNome, TemSobrenome {
       constructor (
           public readonly nome: TemNome,
           public readonly sobrenome: TemSobrenome,
           private readonly idade: number,
       ) {}

       const desenvolvedorWeb = new desenvolvedorWeb('Anderson', 'André', 22);
       console.log(desenvolvedorWeb);
   }
```
