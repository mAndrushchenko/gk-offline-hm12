import React, { FC } from "react"
import { IImageComponent } from "./image-types"


export const Image: FC<IImageComponent> = ({ image }) => {
    const { webformatURL } = image

    return (
        <div
            className="image-box">
            <img
                className="image-item"
                src={webformatURL}
                alt=""
                draggable={false}
            />
        </div>
    )
}



