export const sqdigits = (x: any): any => +[...(x + "")].map((v: any) => v * v).join("");
