export default function Video({ id }: { id: string }) {
    return (
      <div className="aspect-w-16 h-9">
        <iframe
          src={`https://youtube.com/embed/${id}`}
          title="Youtube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                  gyroscope; picture-in-picture; web-share"
        />
      </div>
    );
  }