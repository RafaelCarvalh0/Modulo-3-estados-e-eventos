type Props = {
    label: string;
    onClick: () => void
}

export const CustomButton = ({ label, onClick }: Props) => {

    const handleButtonClick = () => {
        // Alguma coisa antes
        onClick();
        // Alguma coisa depois
    }

    return (
        <button onClick={handleButtonClick} className="p-3 m-2 rounded-md text-white bg-blue-700">{label}</button>
    );
}
