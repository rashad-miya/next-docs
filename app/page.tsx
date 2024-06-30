import { fetchDocs } from "@/lib/fetchData";


export default function Home() {
  const data = fetchDocs();
  return (
    <main className="">
      {/* <div className="text-white">
        <h1>{data.newDocs.header}</h1>
        <h5>{data.newDocs.greetings}</h5>
        {data.newDocs.paragraph.map((item:any)=>(
          <div key={item.id} dangerouslySetInnerHTML={{ __html: item.text }} />
        ))}
      </div> */}
    </main>
  );
}
