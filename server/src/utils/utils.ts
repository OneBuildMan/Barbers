export const convertBufferToString = (value: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => {
    return Buffer.from(value).toString();
};
