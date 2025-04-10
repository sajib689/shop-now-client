// src/app/order/[id]/page.tsx
import Order from '@/components/OrderHistory/Order';  // Adjust path as necessary

export default async function Page({ params }: { params: { id: string } }) {
  // Ensure that params.id is awaited correctly
  const { id } = await params;  // Await the params here
  
  if (!id) {
    return <p>Error: ID not found</p>;
  }

  return <Order id={id} />;
}
