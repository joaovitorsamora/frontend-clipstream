interface DropdownProps {
    children: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
    return (
        <button>
            {children}
        </button>
    )
}