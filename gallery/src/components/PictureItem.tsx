import { Picture } from "@/app/types/Picture";

type Props = {
    picture: Picture;
    index: number;
    onClick: (index: number) => void;
}

export const PictureItem = ({ picture, index, onClick }: Props) => {
    return (
        <div key={index} onClick={() => onClick(index)} className="bg-gray-900 p-1 cursor-pointer hover:opacity-80 rounded-sm">
            <img className="h-full w-full" src={picture.path} alt={picture.name} />
        </div>
    );
}