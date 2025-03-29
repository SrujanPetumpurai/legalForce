import Icon from "./Icon"
import Status from "./Status"
import Description from "./Description"
import Details from "./Details"
export default function Brand(){

    return(
        <tr >
            <td className="pt-6">  <Icon></Icon> </td>
            <td className="pt-6"><Details></Details></td>
            <td className="pt-6">  <Status></Status> </td>
            <td className="pt-6">  <Description></Description> </td>
        </tr>
    )
}