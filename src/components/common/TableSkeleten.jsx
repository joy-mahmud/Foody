
const SkeletonRow = ({ columns = 5 }) => {
    return (
        <tr className="animate-pulse">
            {Array.from({ length: columns }).map((_, idx) => (
                <td key={idx} className="px-4 py-1">
                    <div className="h-[30px] w-[80px] bg-gray-200 rounded-md"></div>
                </td>
            ))}
        </tr>
    )
}

const TableSkeleton = ({ rows = 5, columns = 5 }) => {
    return (
        <>
            {Array.from({ length: rows }).map((_, idx) => (
                <SkeletonRow key={idx} columns={columns} />
            ))}
        </>
    )
}

export default TableSkeleton
