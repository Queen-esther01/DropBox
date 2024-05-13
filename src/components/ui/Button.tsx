

const Button = ({ children, onClick, outline }: { outline?:boolean, children: string | JSX.Element, onClick?: () => void }) => {
    return (
        <button className={`${outline ? 'border border-[#93c5fd]' : 'border-0 bg-[#93c5fd]'}  px-6 py-3 rounded-md `}onClick={onClick}>{ children }</button>
    )
}

export default Button