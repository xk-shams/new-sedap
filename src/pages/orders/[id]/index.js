import { useParams } from "next/navigation";
import orderListData from "@/data";
function OrderDetail() {
  const route = useParams();
  const currentOrder = orderListData.find((item) => {
    if (item.userId === parseInt(route?.id)) {
      return true;
    }
  });
  console.log("OrderDetail", currentOrder);
  return <div>Bu order detail</div>;
}

export default OrderDetail;
