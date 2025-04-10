import Order from "@/components/OrderHistory/Order";


export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="p-6">
      <Order id={id}/>
    </div>
  );
}
