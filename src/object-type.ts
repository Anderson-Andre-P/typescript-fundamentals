const objectA: {
    keyA: string;
    readonly keyB: string;
    keyC?: string;
    [key: string]: unknown;
} = {
    keyA: 'Value A',
    keyB: 'Value B',
};

objectA.keyA = 'New Value A';
objectA.keyC = 'New Value C';
objectA.keyD = 'New key with new value';
