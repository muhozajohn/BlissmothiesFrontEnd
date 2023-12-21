import formatDate from "../../../components/date/Date";
import formatTime from "../../../components/date/Time";

const OrdersTable = ({ orderItem, index }) => {
  return (
    <tbody>
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-300">
        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {orderItem?.cartOwner?.fullName}
        </td>
        <td className="whitespace-nowrap px-6 py-4">{orderItem?.quantity}</td>
        <td className="whitespace-nowrap px-6 py-4">
          {" "}
          {formatDate(orderItem?.updatedAt)}
        </td>
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          {formatTime(orderItem?.updatedAt)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {formatDate(orderItem?.createdAt)}
        </td>
        <td className="whitespace-nowrap px-6 py-4">
          {orderItem?.totalPrice} Frw
        </td>
        <td className="whitespace-nowrap px-6 py-4">Progres</td>
      </tr>
    </tbody>
  );
};

export default OrdersTable;
