export type User = {
    id?: string;
    name?: string;
    email: string;
    password: string;
}

export type RecRadioProps = {
    title: string;
    description: string | string[];
}
export type CircleRadioProps = {
    color: string;
    colorName: string;
    price: string;
}
export type CircleRadioImgProps = {
    img: string;
    name: string;
    price: string;
}