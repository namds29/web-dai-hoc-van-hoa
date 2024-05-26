
import { Button, Modal, message } from "antd";
import { useEffect, useRef, useState } from "react";
import { IPositionItem, IPostDataType } from "src/interfaces";
import HomepageService from "src/services/homepage/homepageService";

type IProps = {
    data: any,
    show?: boolean;
    onCancel: () => void;
    onOk: () => void;
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
    const onSave = async () => {
        const orderImages: IPositionItem[] = listImg.map((item: IPositionItem) => ({id: item.id, ordering: item.ordering}))
        try {
            const res = await HomepageService.editPositionBanner(orderImages)
            res.message === 'success' && message.success(`Swap successfully.`)
            onOk();
            onCancel();
        } catch (error) {
            message.error(`Swap failed.`)
        }
    }
    useEffect(() => {
        if (!listImg.length) setListImg(data)
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
                        className="confirm-btn bg-black text-white"
                        key="ok"
                        onClick={onSave}
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
            <div className="flex flex-col gap-5 justify-start items-start">
                {listImg && listImg.map((item: IPostDataType, index: number) => (
                    <div key={index} className="w-full flex justify-between">
                        <img
                            width={272}
                            alt="logo"
                            src={`${import.meta.env.VITE_API_URL}${item.path}`}
                        />
                        <div className="flex gap-4 items-center">
                            <button className="p-2 bg-black text-white rounded h-10 w-16" onClick={() => handleUp(index)}>Up</button>
                            <button className="p-2 bg-black text-white rounded h-10 w-16" onClick={() => handleDown(index)}>Down</button>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    );
}

export default ModalSwapPosition;
