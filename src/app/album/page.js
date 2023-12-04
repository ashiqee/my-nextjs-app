import Image from "next/image";

import devImg from "@/assets/images/developer.jpg";

const AlbumPage = () => {
  return (
    <div>
      <h2>This Image Component</h2>
      <div className="flex gap-2">
        <Image
          className="rounded-2xl"
          src="https://assets.playgroundai.com/9e05bcdd-c8e8-4572-8187-47c098d83ecc.jpg"
          width={300}
          height={300}
          alt="next-girl"
        />
        {/* <img></img> avoid */}

        <Image
          className="rounded-2xl"
          src={devImg}
          width={300}
          height={300}
          alt="next-girl"
        />

        <Image
          className="rounded-2xl"
          src="https://storage.googleapis.com/pai-images/0fe157177e3c41d7ba3cfc444ceebd65.jpeg"
          width={300}
          height={300}
          alt="next-girl"
        />
      </div>
    </div>
  );
};

export default AlbumPage;
