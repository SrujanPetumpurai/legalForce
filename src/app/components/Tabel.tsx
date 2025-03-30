import Brand from "./Brand"
export default function Tabel(){
    return(
        <div className="w-[1048px]">
            <table className="mt-4 ml-17 w-[1048px]">
                <thead  >
                    <tr className="text-black  border-b border-gray-200 ">
                        <th className="text-left pl-4 font-thin">Mark</th>
                        <th className="text-left pl-4 font-thin">Details</th>
                        <th className="text-left pl-4 font-thin">Status</th>
                        <th className="text-left pl-4 font-thin">Class/Description</th>
                    </tr>
                </thead>
                <tbody className="mt-4 pt-4">
                    <Brand></Brand>
                    <Brand></Brand>
                    <Brand></Brand>
                    <Brand></Brand>
                    <Brand></Brand>
                    <Brand></Brand>
                    <Brand></Brand>
                    <Brand></Brand>
                </tbody>
            </table>
        </div>
    )
}