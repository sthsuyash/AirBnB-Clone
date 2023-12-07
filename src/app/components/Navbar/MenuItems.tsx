'use client';

interface MenuItemsProps {
    onClick: () => void;
    label: string;
    classname?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ onClick, label, classname }) => {
    const classes = `px-4 py-3 hover:bg-neutral-100 transition font-semibold ${classname}`;
    return (
        <div className={classes} onClick={onClick}>
            {label}
        </div>
    )
}

export default MenuItems;