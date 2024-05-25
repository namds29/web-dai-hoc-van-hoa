
import { Button, Modal } from "antd";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { IPostDataType } from "src/interfaces";

type IProps = {
    data: any,
    show?: boolean;
    onCancel?: MouseEventHandler<HTMLElement>;
    onOk?: MouseEventHandler<HTMLElement>;
};

export enum MESSAGE_TYPE {
    ERROR = "error",
    WARNING = "warning",
    CONFIRM = "confirm",
    DEFAULT = "",
}


function ModalSwapPosition({
    data,
    show,
    onCancel,
    onOk,
}: IProps): JSX.Element {
    const [listImg, setListImg] = useState<any[]>([])
    const buttonOkRef = useRef<HTMLButtonElement>(null);
    const handleUp = (index: number) => {
        console.log(index);
        if (index > 0) {
            const newArray = [...listImg];
            [newArray[index], newArray[index - 1]] = [newArray[index - 1], newArray[index]];
            newArray[index].ordering = index;
            newArray[index - 1].ordering = index - 1;
            setListImg(newArray)
        }
    }
    const handleDown = (index: number) => {
        if (index < listImg.length - 1) {
            const newArray = [...listImg];
            [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index]];
            newArray[index].ordering = index;
            newArray[index + 1].ordering = index + 1;
            setListImg(newArray);
        }
    }
    useEffect(() => {
        if (!listImg.length) setListImg(data)
        // data && 
    }, [listImg, data])
    return (
        <Modal
            className="custom-modal"
            title={'Swap banner position'}
            centered
            open={show}
            onCancel={onCancel}
            width={800}
            footer={
                [
                    <Button
                        className="confirm-btn"
                        key="ok"
                        onClick={onOk}
                        ref={buttonOkRef}
                    >
                        Save
                    </Button>,
                    <Button className="confirm-btn" key="cancel" onClick={onCancel}>
                        Cancel
                    </Button>,
                ]
            }
        >
            <div className="flex flex-col items-center gap-5 justify-start items-start">
                {listImg && listImg.map((item: IPostDataType, index: number) => (
                    <div className="w-full flex justify-between">
                        <img
                            width={272}
                            alt="logo"
                            src={`${import.meta.env.VITE_API_URL}${item.path}`}
                        />
                        <div className="flex gap-4">
                            <button className="p-2 w-16 bg-black text-white rounded" onClick={() => handleUp(index)}>Up</button>
                            <button className="p-2  w-16 bg-black text-white rounded" onClick={() => handleDown(index)}>Down</button>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
}

export default ModalSwapPosition;
