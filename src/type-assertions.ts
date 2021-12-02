// Condicional (Recomendável)
const body10 = document.querySelector('body');
if (body10) body10.style.background = 'red';

// Non-null a0ssertion (!)  (Não recomendável)
const body20 = document.querySelector('body')!;
body20.style.background = 'red';

// Type assertion (Recomendável)
const body30 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement (Recomendável)
const input0 = document.querySelector('.input') as HTMLInputElement;
input0.value = 'Any thing';
input0.focus();
