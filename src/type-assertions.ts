// Condicional (Recomendável)
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Non-null assertion (!)  (Não recomendável)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion (Recomendável)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement (Recomendável)
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Any thing';
input.focus();
