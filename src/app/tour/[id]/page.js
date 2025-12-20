import TourDetailsPage from '@/template/TourDetailsPage'


 async function TourDetails({params}) {
  const { id } = await params;
  const res = await fetch (
    `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${id}`,
    { 
        cache: "no-store",
        headers: {
          'Accept': 'application/json',
        }
      }
  );
   const data = await res.json();
  return <TourDetailsPage tour={data} />
}

export default TourDetails