

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Order ID: {id}</h1>
      {/* You can add order detail logic here */}
    </div>
  );
}
