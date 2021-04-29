import React, { useState, useCallback, useMemo, useEffect, FC } from "react"
import { IImagesState, TArrayImagesState, TImageState } from "./image-types"
import { selectImage, getImages } from "../../store/imageSlice"
import { randomImages } from "../../services/randomImages"
import { useDispatch, useSelector } from "react-redux"
import { TAppDispatch } from "../../store/store-types"
import { Image } from './Image'


export const Images: FC = () => {
    const dispatch = useDispatch<TAppDispatch>()
    const images = useSelector<IImagesState, TArrayImagesState>(selectImage)

    const [res, setRes] = useState<TArrayImagesState | null>(null)
    const [text, setText] = useState<string>('Upload images')

    const data = useMemo(() => randomImages(res), [res])

    const handleClick = useCallback(() => {
        dispatch(getImages())
        setText('Upload another images')
    }, [res, images])

    useEffect(() => setRes(images), [images])

    return (
        <div className="box box-images">
            <img
                src={process.env.PUBLIC_URL + '/image-bg.jpg'}
                draggable={false}
                className="bg bg-image"
                alt=""
            />
            <div className="images-wrapper">
                <div className="images-content">
                    <div className="btn-wrapper btn-wrapper-images">
                        <button
                            className="btn btn-images"
                            onClick={handleClick}>
                            {text}
                        </button>
                    </div>
                    <div
                        className="images-pictures">
                        {res && data.map((item: TImageState, index: number) => {
                            if (index <= 8) {
                                return <Image image={item} key={index} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}



