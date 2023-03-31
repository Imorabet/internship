export default function Pagination({ tab }) {
    const [pagination, setPagination] = useState({
        currentPage: 0,
        itemsPerPage: 4,
    });
    const handlePageClick = (data) => {
        setPagination({
            ...pagination,
            currentPage: data.selected,
        });
    };
    const startIndex = pagination.currentPage * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const visibleStagiaires = tab.slice(startIndex, endIndex);

    return (
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(
                tab.length / pagination.itemsPerPage
            )}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            previousLinkClassName={
                "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            }
            nextLinkClassName={
                "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            }
            containerClassName={"flex  w-full justify-center rounded-lg "}
            pageLinkClassName={
                "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-slate-100 "
            }
            activeLinkClassName={
                "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-800 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out hover:text-blue-900"
            }
            disabledLinkClassName={"text-gray-400"}
        />
    );
}
