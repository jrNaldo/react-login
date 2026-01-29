interface ContainerProps {
    children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <div className="flex justify-between items-center gap-2 mt-2 sm:mt-4 mb-1 ">
            {children}
        </div>
    )
}