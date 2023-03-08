const Line = ({
    className
}: any) => {
    return (
        <div className={`h-[1px] bg-line-gray mx-4 md:mx-8 lg:mx-16 col-span-full ${className ? className : ''}`} />
    )
}

export default Line