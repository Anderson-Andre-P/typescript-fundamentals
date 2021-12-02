export function makeError(): never {
    throw new Error('Any Error');
}

makeError();
