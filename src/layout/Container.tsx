interface ContainerProps {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="flex justify-between items-center gap-2 mb-1 ">
            {children}
        </div>
    )
}