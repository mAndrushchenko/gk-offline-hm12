import { TImageState } from "../../store/store-types"

/**  types for Image component*/
export type TImageState = {
    id: number
    webformatURL: string
}

export interface IImageComponent {
    key: number,
    image: TImageState
}

export type TArrayImagesState = TImageState[]

export interface IImagesState {
    images: TImageState[]
}
